import { logout } from "../../../lib/actions/auth.server.js";

export async function loader({ request }) {
  return await logout(request);
}
