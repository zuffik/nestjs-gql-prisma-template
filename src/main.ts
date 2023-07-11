import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigService} from "./config/config.service";
import {DbService} from "./db/db.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const cfg = app.get(ConfigService)
  const db = app.get(DbService)
  await db.enableShutdownHooks(app)
  await app.listen(cfg.appPort);
}
bootstrap();
