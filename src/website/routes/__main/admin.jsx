import { Outlet } from "@remix-run/react";

import { useLocation } from "@remix-run/react";

import { Link } from "@remix-run/react";

export default function AdminLayout() {
  const location = useLocation();

  return (
    <>
      <div className="mx-auto grid w-full max-w-6xl gap-2 text-black dark:text-white">
        <h1 className="text-3xl font-semibold">Admin</h1>
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <nav className="grid gap-4 text-sm text-muted-foreground text-black dark:text-white">
          <Link
            to="/admin"
            className={
              location.pathname === "/admin" && "font-bold text-primary"
            }
          >
            Home
          </Link>
          <Link
            to="/admin/licenses"
            className={
              location.pathname === "/admin/licenses" &&
              "font-bold text-primary"
            }
          >
            Licenses
          </Link>
          <Link
            to="/admin/users"
            className={
              location.pathname === "/admin/users" && "font-bold text-primary"
            }
          >
            Users
          </Link>
        </nav>
        <Outlet />
      </div>
    </>
  );
}
