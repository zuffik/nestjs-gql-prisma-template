Object.defineProperty(exports, '__esModule', { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library');

const Prisma = {};

exports.Prisma = Prisma;

/**
 * Prisma Client JS version: 4.16.2
 * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
 */
Prisma.prismaVersion = {
  client: '4.16.2',
  engine: '4bc8b6e1b66cb932731fb1bdbbc550d1e010de81',
};

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.NotFoundError = NotFoundError;
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = Public.validator;

/**
 * Extensions
 */
Prisma.getExtensionContext = Extensions.getExtensionContext;
Prisma.defineExtension = Extensions.defineExtension;

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull,
};

const path = require('path');

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
});

exports.Prisma.TestScalarFieldEnum = {
  id: 'id',
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc',
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive',
};

exports.Prisma.ModelName = {
  Test: 'Test',
};
/**
 * Create the Client
 */
const config = {
  generator: {
    name: 'client',
    provider: {
      fromEnvVar: null,
      value: 'prisma-client-js',
    },
    output: {
      value:
        '/Users/kristianzuffa/workspace/work/vivse.sk/backend/prisma/generated/client',
      fromEnvVar: null,
    },
    config: {
      engineType: 'library',
    },
    binaryTargets: [
      {
        fromEnvVar: null,
        value: 'darwin',
        native: true,
      },
      {
        fromEnvVar: null,
        value: 'darwin',
      },
      {
        fromEnvVar: null,
        value: 'debian-openssl-1.1.x',
      },
      {
        fromEnvVar: null,
        value: 'linux-musl',
      },
    ],
    previewFeatures: [],
    isCustomOutput: true,
  },
  relativeEnvPaths: {
    rootEnvPath: '../../../.env',
    schemaEnvPath: '../../../.env',
  },
  relativePath: '../..',
  clientVersion: '4.16.2',
  engineVersion: '4bc8b6e1b66cb932731fb1bdbbc550d1e010de81',
  datasourceNames: ['db'],
  activeProvider: 'postgresql',
  dataProxy: false,
  postinstall: false,
};

const fs = require('fs');

config.dirname = __dirname;
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  config.dirname = path.join(process.cwd(), 'prisma/generated/client');
  config.isBundled = true;
}

config.runtimeDataModel = JSON.parse(
  '{"models":{"Test":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}',
);
defineDmmfProperty(exports.Prisma, config.runtimeDataModel);

const { warnEnvConflicts } = require('./runtime/library');

warnEnvConflicts({
  rootEnvPath:
    config.relativeEnvPaths.rootEnvPath &&
    path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
  schemaEnvPath:
    config.relativeEnvPaths.schemaEnvPath &&
    path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath),
});

const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);

path.join(__dirname, 'libquery_engine-darwin.dylib.node');
path.join(
  process.cwd(),
  'prisma/generated/client/libquery_engine-darwin.dylib.node',
);

path.join(__dirname, 'libquery_engine-debian-openssl-1.1.x.so.node');
path.join(
  process.cwd(),
  'prisma/generated/client/libquery_engine-debian-openssl-1.1.x.so.node',
);

path.join(__dirname, 'libquery_engine-linux-musl.so.node');
path.join(
  process.cwd(),
  'prisma/generated/client/libquery_engine-linux-musl.so.node',
);
path.join(__dirname, 'schema.prisma');
path.join(process.cwd(), 'prisma/generated/client/schema.prisma');
