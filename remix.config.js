import { createRoutesFromFolders } from "@remix-run/v1-route-convention"

export default {
  appDirectory: "src/website",
  assetsBuildDirectory: "public/build",
  ignoredRouteFiles: ["**/*.css"],
  serverBuildPath: "build/index.js",
  watchPaths: [
    "./src/**/*.js"
  ],
  routes(defineRoutes) {
    // uses the v1 convention, works in v1.15+ and v2
    return createRoutesFromFolders(defineRoutes,
      {
        appDirectory: "src/website"
      }
    );
  },
};
