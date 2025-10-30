import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";

import { Toaster } from "./components/ui/sonner";

import { requireAuth } from "../lib/actions/auth.server.js";

import { themeSessionResolver } from "../lib/general/themes.server.js";

import clsx from "clsx";

import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";

import styles from "./components/globals.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export const meta = () => {
  return [{ title: "Elysium" }];
};

// auth n theme loader
export async function loader({ request }) {
  const { getTheme } = await themeSessionResolver(request);

  return {
    theme: getTheme(),
    user: await requireAuth(request),
    env: {
      YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
      YOUTUBE_CHANNEL_ID: process.env.YOUTUBE_CHANNEL_ID,
    },
  };
}

// base error handler
// this triggers on pages like index where theres no tailwind
// i cant design shit without tailwind lmao
export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <div>
      <h2>Mate, your request was not good. Damn.</h2>

      <h3>
        Error code: <b>{error.status ?? 500}</b>{" "}
      </h3>
    </div>
  );
}

function App() {
  const data = useLoaderData();

  const [theme] = useTheme();

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Meta />
        <Links />
      </head>
      <body>
        <div style={{ zIndex: 9999 }}>
          <Toaster expand={true} visibleToasts={5} richColors />
        </div>

        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const { theme } = useLoaderData();

  return (
    <ThemeProvider specifiedTheme={theme} themeAction="/api/set-theme">
      <App />
    </ThemeProvider>
  );
}
