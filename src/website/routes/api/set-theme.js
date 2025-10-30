import { createThemeAction } from "remix-themes";

import { themeSessionResolver } from "../../../lib/general/themes.server.js";

export const action = createThemeAction(themeSessionResolver);
