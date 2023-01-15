import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';

export const AppDataSource = new DataSource({
  type: process.env.DB_TYPE,
  url: process.env.DB_URL,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: process.env.DB_SYNCHRONIZE === 'true',
  dropSchema: false,
  keepConnectionAlive: true,
  logging: process.env.NODE_ENG !== 'production',
  entities: [__dirname + '/../**/*.entity{.ts, .js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src',
    migrationsDir: 'src/database/migrations',
    subscriberDir: 'subscriber',
  },
  extra: {
    max: parseInt(process.env.DB_MAX_CONNECTIONS, 10) || 100,
  },
} as DataSourceOptions);
