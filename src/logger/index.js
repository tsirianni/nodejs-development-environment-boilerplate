'use strict';

const Logger = require('./logger');
const logger = new Logger();
const fileLogger = new Logger('file');

module.exports = { logger, fileLogger };
