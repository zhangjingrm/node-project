import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
var log4js = require('log4js');

log4js.configure({
  appenders: {
    access: { type: 'dateFile', filename: 'log/access.log', pattern: '-yyyy-MM-dd' },
    app: { type: 'file', filename: 'log/app.log', maxLogSize: 10485760, numBackups: 3 },
    errorFile: { type: 'file', filename: 'log/errors.log' },
    errors: { type: 'logLevelFilter', level: 'error', appender: 'errorFile' }
  },
  categories: {
    default: { appenders: ['app', 'errors'], level: 'debug' },
    http: { appenders: ['access'], level: 'debug' }
  }
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(log4js.connectLogger(log4js.getLogger('access'), { level: log4js.levels.DEBUG }));
  await app.listen(3000);
}
bootstrap();
