import { Hono } from "hono";

import { logger as requests } from "hono/logger";

import { timing } from "hono/timing";

import { serveStatic } from "hono/bun";

import logger from "./lib/general/logger.js";

import { onError, requestLog } from "./lib/general/errorHandler.js";

// Import Remix app
import * as build from "../build/index.js";
import { remix } from "remix-hono/handler";

// Init hono app
const app = new Hono();

// App middleware
app.use(requests(requestLog));

app.use(timing());

// Error handler
app.onError(onError);

// Remix app
app.use(
  "*",
  serveStatic({ root: "public" }),
  remix({ build, mode: process.env.NODE_ENV }),
);

// Log app start
logger.info(`Dashboard is up on port ${process.env.APP_PORT}`);

export default {
  port: process.env.APP_PORT,
  fetch: app.fetch,
};
