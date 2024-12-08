import { createLogger, transports, format } from "winston";

export const logger = createLogger({
  level: "error",
  format: format.combine(
    format.timestamp(),
    format.json(),
    format.printf(
      ({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`
    )
  ),
  transports: [
    new transports.File({ filename: "errors.log" }), // Logs errors to a file
    new transports.Console(), // Logs errors to the console
  ],
});
