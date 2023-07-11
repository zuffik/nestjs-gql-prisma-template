import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigService } from './config/config.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Context } from 'graphql-ws';
import { IncomingMessage } from 'http';
import { Environment } from './config/environment';
import { TestResolver } from './test.resolver';
import { DbModule } from './db/db.module';

@Module({
  imports: [
    ConfigModule,
    DbModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [ConfigModule],
      inject: [ConfigService],
      driver: ApolloDriver,
      useFactory: (cfg: ConfigService) => ({
        driver: ApolloDriver,
        autoSchemaFile: 'schema.gql',
        fieldResolverEnhancers: ['guards'],
        playground: cfg.env === Environment.DEVELOPMENT,
        subscriptions: {
          'graphql-ws': true,
          'subscriptions-transport-ws': {
            // onConnect: async (params: { Authorization?: string }) => {
            //   const token = params.Authorization?.replace(/^Bearer\s/, '');
            //   if (!token || !auth.isValidToken(token)) {
            //     throw new UnauthorizedException();
            //   }
            //   return {
            //     user: await auth.decodeTokenAndGetUser(token),
            //   };
            // },
          },
        },
        context: (
          ctx: Context<Record<string, string>, { request: IncomingMessage }>,
        ) => {
          if ('subscriptions' in ctx) {
            const headers = Object.fromEntries(
              Object.entries(ctx.connectionParams).map(([k, v]) => [
                k.toLowerCase(),
                v,
              ]),
            );
            return {
              req: Object.assign(ctx.extra.request, {
                headers: {
                  ...ctx.extra.request.headers,
                  ...headers,
                },
                header: (name: string) =>
                  ({
                    ...ctx.extra.request.headers,
                    ...headers,
                  })[name],
              }),
            };
          }
          return ctx;
        },
      }),
    }),
  ],
  controllers: [],
  providers: [TestResolver],
})
export class AppModule {}
