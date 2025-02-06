import {Product} from '../database/entities/product.entity';
import {StoreProductRequestDataType} from '../types';

export class ProductService {

  static async findAll(): Promise<Product[]> {
    return await Product.find({take: 10, relations: ['category']});
  }

  static async find(id: number) {
    return await Product.findOneOrFail({where: {id}});
  }

  static async store(data: StoreProductRequestDataType) {
    const product = new Product();
    product.name = data.name;
    product.category_id = data.category_id
    product.description = data.description
    product.price = data.price
    await product.save();
    return product;
  }

  static async update(id: number, data: StoreProductRequestDataType) {
    const product = await this.find(id);
    product.name = data.name;
    product.category_id = data.category_id
    product.description = data.description
    product.price = data.price
    await product.save();
    return product;
  }

  static async delete(id: number) {
    const product = await this.find(id);
    await product.remove();
  }
}