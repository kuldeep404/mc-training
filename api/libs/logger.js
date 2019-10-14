import appRoot from "app-root-path";
import winston, { createLogger, format, transports } from "winston";

const level = process.env.LOG_LEVEL || "info";

const { combine, timestamp, label, printf, splat, prettyPrint } = format;

const myFormat = printf(({ level, message, label, timestamp, meta }) => {
  return `${timestamp} :   ${level}:  ${message} :    ${meta ? JSON.stringify(meta, null, 2) : ""}`;
});

const logger = createLogger({
  format: combine(timestamp(), splat(), myFormat, format.colorize({ all: true })),
  transports: [
    new transports.Console({
      level: level,
      prettyPrint: true,
      timestamp: function() {
        return new Date().toISOString();
      }
    }),
    // new transports.File({
    //   filename: `${appRoot}/tmp/error.log`,
    //   level: "error"
    // })
    //  new transports.File({
    //    filename: `${appRoot}/logs/combined.log`,
    //    level: 'silly'
    //  })
  ]
});

export default logger;