import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Product} from './product.entity';
import {Base} from './base';

@Entity({name: 'categories'})
export class Category extends Base {
  static searchFields = ['name', 'slug'];
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];

  toJSON() {
    const {id, name, slug, products} = this;
    return {id, name, slug, products};
  }
}