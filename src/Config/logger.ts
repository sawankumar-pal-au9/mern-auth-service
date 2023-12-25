import { createLogger, format, transports } from 'winston';
import { Config } from '.';
const { combine, timestamp, json } = format;

const logger = createLogger({
    level: 'info',
    defaultMeta: {
        serviceName: 'auth-service',
    },
    transports: [
        new transports.File({
            dirname: 'logs',
            filename: 'combined.log',
            level: 'info',
            format: combine(timestamp(), json()),
            silent: Config.NODE_ENV === 'test',
        }),
        new transports.File({
            dirname: 'logs',
            filename: 'error.log',
            level: 'error',
            format: combine(timestamp(), json()),
            silent: Config.NODE_ENV === 'test',
        }),
        new transports.Console({
            level: 'info',
            format: combine(timestamp(), json()),
            silent: Config.NODE_ENV === 'test',
        }),
    ],
});

export default logger;
