import styles from "../components/main.css";

import Layout from "../components/base/layout.jsx";

import { useRouteError, Meta, Links } from "@remix-run/react";

export const links = () => [{ rel: "stylesheet", href: styles }];

// treat our users with a better page
// we have tailwind here
export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-black">
          <div className="max-w-md mx-auto text-center">
            <h1
              className={`${error.status ? "text-7xl" : "text-4xl"} font-bold text-gray-800 dark:text-white`}
            >
              {error.status ?? "Error"}
            </h1>
            <p className="mt-2 text-gray-500 dark:text-gray-200">
              Couldn't process your request
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}

export default Layout;
