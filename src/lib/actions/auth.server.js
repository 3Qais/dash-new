import { createCookieSessionStorage, redirect } from "@remix-run/node";

import { prisma } from "../utilities/prisma.server.js";

import { z } from "zod";

import { json } from "@remix-run/react";

import { fromError } from "zod-validation-error";

export const nonProtectedPaths = ["/", "/login", "/register"];

let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "auth",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    maxAge: 60 * 60 * 24 * 30,
    secure: process.env.NODE_ENV === "production",
  },
});

let loginSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username is too short" })
    .max(20, { message: "Username is too long" })
    .trim(),
  password: z
    .string()
    .min(6, { message: "Password is too short" })
    .max(256, { message: "Holy shit dude make a shorter password" }),
});

let registerSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  username: z
    .string()
    .min(3, { message: "Username is too short" })
    .max(20, { message: "Username is too long" })
    .trim(),
  password: z
    .string()
    .min(6, { message: "Password is too short" })
    .max(256, { message: "Holy shit dude make a shorter password" }),
  license: z.string().length(16, { message: "Invalid license" }).trim(),
});

export async function createUserSession(userId) {
  const session = await sessionStorage.getSession();

  session.set("userId", userId);

  return redirect("/home", {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}

/* Auth actions */

export async function login(form) {
  // validate form
  try {
    loginSchema.parse(form);
  } catch (err) {
    return json({ error: fromError(err).details }, { status: 400 });
  }

  // login user
  const user = await prisma.users.findUnique({
    where: {
      username: form.username,
    },
  });

  if (!user || !(await Bun.password.verify(form.password, user.password)))
    return json({ error: "Incorrect credentials" }, { status: 401 });

  return createUserSession(user.id);
}

export async function register(form) {
  // validate form
  try {
    registerSchema.parse(form);
  } catch (err) {
    return json({ error: fromError(err).details }, { status: 400 });
  }

  // verify license
  if (!(await prisma.licenses.findUnique({ where: { license: form.license } })))
    return json({ error: "Invalid registration key" }, { status: 400 });

  // register the user
  let user;

  try {
    user = await prisma.users.create({
      data: {
        username: form.username,
        email: form.email,
        password: await Bun.password.hash(form.password),
      },
    });
  } catch (err) {
    return json(
      { error: "A user with this data already exists" },
      { status: 400 },
    );
  }

  // delete license
  await prisma.licenses.delete({
    where: {
      license: form.license,
    },
  });

  return createUserSession(user.id);
}

/* Session functions */

function getUserSession(request) {
  return sessionStorage.getSession(request.headers.get("Cookie"));
}

async function getUser(request, userId) {
  try {
    const user = await prisma.users.findUnique({
      where: { id: userId },
      select: { id: true, username: true },
    });

    if (!user) return await logout(request);

    return user;
  } catch {
    throw await logout(request);
  }
}

export async function requireAuth(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  const session = await getUserSession(request);
  const userId = session.get("userId");

  const isOnProtectedPage = !nonProtectedPaths.includes(pathname);

  if (userId && !isOnProtectedPage) {
    throw redirect("/home");
  }

  if (!userId && isOnProtectedPage) {
    throw redirect("/login");
  }

  return isOnProtectedPage ? await getUser(request, userId) : null;
}

export async function logout(request) {
  const session = await getUserSession(request);

  return redirect("/login", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}
