"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const { format, createLogger, transports } = require("winston");
const { combine, timestamp, label, printf } = format;
const CATEGORY = "winston log";
const customFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});
exports.logger = createLogger({
    level: "debug",
    format: combine(label({ label: CATEGORY }), timestamp(), customFormat),
    transports: [new transports.Console()],
});
//# sourceMappingURL=logger.js.map