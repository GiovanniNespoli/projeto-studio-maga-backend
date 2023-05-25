module.exports = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS || undefined,
  database: process.env.POSTGRES_DB,
  logging: false,
  synchronize: false,
  entities: [
    process.env.PRODUCTION.toLowerCase().trim() === 'true'
      ? './dist/modules/**/infra/typeorm/entities/*.js'
      : './src/modules/**/infra/typeorm/entities/*.ts',
  ],
  migrations: [
    process.env.PRODUCTION.toLowerCase().trim() === 'true'
      ? './dist/shared/infra/typeorm/migrations/*.js'
      : './src/shared/infra/typeorm/migrations/*.ts',
  ],
  subscribers: ['common/subscriber/**/*.ts'],
  cli: {
    migrationsDir:
      process.env.PRODUCTION.toLowerCase().trim() === 'true'
        ? './dist/shared/infra/typeorm/migrations'
        : './src/shared/infra/typeorm/migrations',
  },
};
