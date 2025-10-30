import { useRouteLoaderData } from "@remix-run/react";

export default function Home() {
  const { user } = useRouteLoaderData("root");

  return (
    <div className="space-y-4 max-w-7xl w-full h-full px-4 sm:px-6 lg:px-8 m-auto text-black dark:text-white">
      <div className="flex flex-col space-y-4 pb-4 pt-10">
        <h2 className="text-3xl font-semibold">Hello, {user.username}!</h2>
        <p>Come back later bruh nothin here yet</p>
      </div>
    </div>
  );
}
