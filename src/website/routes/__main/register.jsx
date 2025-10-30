import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

import { register } from "../../../lib/actions/auth.server.js";

import { parseForm, showErrors } from "../../../lib/utilities/other.js";

import { useActionData, Link } from "@remix-run/react";

import { useEffect } from "react";

export async function action({ request }) {
  const formData = await request.formData();

  return await register(parseForm(formData));
}

export default function Register() {
  const actionData = useActionData();

  useEffect(
    () => actionData?.error && showErrors(actionData.error),
    [actionData],
  );

  return (
    <div className="flex flex-col h-full justify-center items-center">
      <Card className="w-full max-w-sm" isForm={true} method="post">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            Fill out the form below to make an account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              type="email"
              placeholder="cozmo@elysium.wtf"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input name="username" type="text" placeholder="Cozmo" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              name="password"
              type="password"
              placeholder="●●●●●●●●●●●●"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">License</Label>
            <Input name="license" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex-col">
          <Button className="w-full" type="submit">
            Sign up
          </Button>

          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
