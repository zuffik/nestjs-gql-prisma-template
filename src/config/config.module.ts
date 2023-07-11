import { Module } from '@nestjs/common';
import { ConfigModule as ConfigModuleBase } from '@nestjs/config';
import { ConfigService } from './config.service';
import { validate } from './validate';
import * as process from 'process';

@Module({
  imports: [
    ConfigModuleBase.forRoot({
      validate,
      cache: true,
      expandVariables: true,
      envFilePath: [
        `.env.${process.env.NODE_ENV}.local`,
        '.env.local',
        `.env.${process.env.NODE_ENV}`,
        '.env',
      ],
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
