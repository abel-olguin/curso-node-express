import {BaseEntity, Brackets} from 'typeorm';

export class Base extends BaseEntity {
  static searchFields: string[] = [];

  static async querySearch(search: string) {
    return this.createQueryBuilder().orWhere(new Brackets(query => {
      this.searchFields.forEach(field => {
        query.orWhere(`${field} ilike :search`, {search: `%${search}%`})
      })
    })).getMany()
  }
}