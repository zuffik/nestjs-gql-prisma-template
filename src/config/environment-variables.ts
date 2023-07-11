import { IsEnum, IsInt, IsString } from 'class-validator';
import { Environment } from './environment';

export class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsInt()
  APP_PORT: number;

  @IsString()
  DB_PROVIDER: string;

  @IsString()
  DB_HOST: string;

  @IsInt()
  DB_PORT: number;

  @IsString()
  DB_USER: string;

  @IsString()
  DB_PASS: string;

  @IsString()
  DB_NAME: string;

  @IsString()
  DB_SCHEMA: string;
}
