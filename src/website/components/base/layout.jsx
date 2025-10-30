import { Outlet, Link } from "@remix-run/react";

import { CircleUser, Menu, LayoutDashboard } from "lucide-react";

import { Button } from "../ui/button";

import ModeToggle from "./mode-toggle.jsx";

import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet.jsx";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu.jsx";

import { useRouteLoaderData } from "@remix-run/react";

export function Header() {
  const { user } = useRouteLoaderData("root");

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-white text-black dark:bg-slate-950 dark:border-slate-800 dark:text-white px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          to={user ? "/home" : "/"}
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <LayoutDashboard className="h-6 w-6" />
          <span className="sr-only">Elysium</span>
        </Link>
        {user && (
          <>
            <Link
              to="/home"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              to="https://minecraftscripts.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Scripts
            </Link>
            <Link
              to="/download"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Download
            </Link>
            <Link
              to="/admin"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Admin
            </Link>
          </>
        )}
      </nav>
      {user ? (
        <>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium text-black dark:text-white">
                <Link
                  to={user ? "/home" : "/"}
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <LayoutDashboard className="h-6 w-6" />
                  <span className="sr-only">Elysium</span>
                </Link>
                <Link
                  to="/home"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Home
                </Link>
                <Link
                  to="https://minecraftscripts.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Scripts
                </Link>
                <Link
                  to="/download"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Download
                </Link>
                <Link
                  to="/admin"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Admin
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </>
      ) : (
        <Link
          to={user ? "/home" : "/"}
          className="flex items-center gap-2 text-lg font-semibold md:hidden"
        >
          <LayoutDashboard className="h-6 w-6" />
          <span className="sr-only">Elysium</span>
        </Link>
      )}

      <div className="ml-auto space-x-2">
        <ModeToggle />

        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <Link to="/settings">
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </Link>
              <Link to="/logout">
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
}

export default function Layout() {
  return (
    <div className="flex h-full w-full flex-col">
      <Header />

      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-[#fbfbfb] dark:bg-slate-950 p-4 md:gap-4 md:p-10">
        <Outlet />
      </main>
    </div>
  );
}
