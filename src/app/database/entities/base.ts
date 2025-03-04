import {BaseEntity, Brackets} from 'typeorm';
import {PaginationType, QueryParamsType} from '../../types';

export class Base extends BaseEntity {
  static searchFields: string[] = [];
  static query;

  static async queryParams<T extends Base>(
    this: typeof Base & (new() => T),
    {
      search, sortBy, direction, page, pageSize
    }: QueryParamsType): Promise<{ items: T[], pagination: PaginationType }> {
    this.query = this.createQueryBuilder();
    await this.querySearch(search)
    await this.querySort(sortBy, direction)
    await this.queryPagination(page, pageSize)

    const [items, total] = await this.query.getManyAndCount();
    return {
      items, pagination: {
        page, pageSize, total, pages: Math.ceil(total / pageSize)
      }
    };
  }

  static async querySearch(search: string) {
    this.query.orWhere(new Brackets(query => {
      if (!search) return;
      this.searchFields.forEach(field => {
        query.orWhere(`${field} ilike :search`, {search: `%${search}%`})
      })
    }))
  }

  static async querySort(sortBy: string, direction: 'ASC' | 'DESC') {
    return this.query.orderBy(sortBy, direction)
  }

  static async queryPagination(page: number, pageSize: number = 10) {
    return this.query.take(pageSize).skip((page - 1) * pageSize)
  }
}