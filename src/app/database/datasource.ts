import {DataSource} from 'typeorm';
import {dbHost, dbName, dbPassword, dbPort, dbSchema, dbUsername} from '../config/app';

export const AppDataSource = new DataSource({
  type:        'postgres',
  host:        dbHost,
  port:        dbPort ? Number(dbPort) : undefined,
  username:    dbUsername,
  password:    dbPassword,
  database:    dbName,
  schema:      dbSchema,
  logging:     true,
  entities:    [],
  subscribers: [],
  migrations:  [],
  cache:       false,
  synchronize: false,
})