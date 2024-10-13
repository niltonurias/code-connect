import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.json(),
  transports: [
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/code-connect.log', level: 'info' }),
  ],
});

export default logger;