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

import { login } from "../../../lib/actions/auth.server.js";

import { parseForm, showErrors } from "../../../lib/utilities/other.js";

import { useActionData, Link } from "@remix-run/react";

import { useEffect } from "react";

export async function action({ request }) {
  const formData = await request.formData();

  return await login(parseForm(formData));
}

export default function Login() {
  const actionData = useActionData();

  useEffect(
    () => actionData?.error && showErrors(actionData.error),
    [actionData],
  );

  return (
    <div className="flex flex-col h-full justify-center items-center">
      <Card className="w-full max-w-sm" isForm={true} method="post">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your username below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
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
        </CardContent>
        <CardFooter className="flex-col">
          <Button className="w-full" type="submit">
            Sign in
          </Button>

          <div className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="underline">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
