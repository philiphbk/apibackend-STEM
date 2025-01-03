"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
exports.logger = (0, winston_1.createLogger)({
    level: "error",
    format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json(), winston_1.format.printf(({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`)),
    transports: [
        new winston_1.transports.File({ filename: "errors.log" }), // Logs errors to a file
        new winston_1.transports.Console(), // Logs errors to the console
    ],
});
