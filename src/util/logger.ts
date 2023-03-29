import pino from 'pino';

const logger = pino({
    level: process.env.LOG_LEVEL || 'info',
    enabled: process.env.NODE_ENV !== 'test',
    prettyPrint: {colorize: true},
});

export default logger;
