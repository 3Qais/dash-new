import logger from "./logger.js";

export function requestLog(message, ...rest) {
  return logger.debug(message, ...rest);
}

export function onError(err, c) {
  logger.error("An error occurred", err);

  return c.json(
    { status: false, message: "An error occured, please try again later!" },
    500,
  );
}
