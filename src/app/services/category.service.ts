import {Category} from '../database/entities/category.entity';
import {StoreCategoryRequestDataType} from '../types';

export class CategoryService {

  static async findAll(query: any) {
    return await Category.queryParams({
      search:    query.search || '',
      sortBy:    query.sort || '',
      direction: query.sortDirection?.toUpperCase() === 'ASC' ? 'ASC' : 'DESC',
      page:      query.page || 1,
      pageSize:  query.pageSize || 10
    });
  }

  static async find(id: number) {
    return await Category.findOneOrFail({where: {id}});
  }

  static async store(data: StoreCategoryRequestDataType) {
    const category = new Category();
    category.name = data.name;
    category.slug = data.slug
    await category.save();
    return category;
  }

  static async update(id: number, data: StoreCategoryRequestDataType) {
    const category = await this.find(id);
    category.name = data.name;
    category.slug = data.slug
    await category.save();
    return category;
  }

  static async delete(id: number) {
    const category = await this.find(id);
    await category.remove();
  }
}