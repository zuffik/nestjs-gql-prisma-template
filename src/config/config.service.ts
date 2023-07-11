import {Injectable} from '@nestjs/common';
import {ConfigService as ConfigServiceBase} from "@nestjs/config";
import {EnvironmentVariables} from "./environment-variables";

@Injectable()
export class ConfigService {
  constructor(private readonly cfg: ConfigServiceBase<EnvironmentVariables>) {
  }

  private getValue<K extends keyof EnvironmentVariables>(key: K) {
    return this.cfg.get<EnvironmentVariables[K]>(key);
  }

  public get env() {
    return this.getValue('NODE_ENV')
  }

  public get appPort() {
    return this.getValue('APP_PORT')
  }

  public get dbProvider() {
    return this.getValue('DB_PROVIDER')
  }

  public get dbHost() {
    return this.getValue('DB_HOST')
  }

  public get dbPort() {
    return this.getValue('DB_PORT')
  }

  public get dbUser() {
    return this.getValue('DB_USER')
  }

  public get dbPass() {
    return this.getValue('DB_PASS')
  }

  public get dbName() {
    return this.getValue('DB_NAME')
  }

  public get dbSchema() {
    return this.getValue('DB_SCHEMA')
  }
}
