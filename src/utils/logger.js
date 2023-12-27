const logger = require("pino");
const pretty = require("pino-pretty");

const log = logger(pretty());

module.exports = log;
