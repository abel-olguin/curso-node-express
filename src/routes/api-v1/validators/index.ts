import {AppDataSource} from '../../../app/database/datasource';

export const exists = (table: string, key: string) => {
  return async (value: number | string) => {
    const total = await AppDataSource.getRepository(table)
                                     .createQueryBuilder(table)
                                     .where(`${table}.${key} = :key`, {key: value})
                                     .getCount();
    return total > 0;
  }
}

export const unique = (table: string, column: string) => {
  return async (value: string) => {
    const total = await AppDataSource.getRepository(table)
                                     .createQueryBuilder(table)
                                     .where(`${table}.${column} = :column`, {column: value})
                                     .getCount();
    return total === 0;
  }
}