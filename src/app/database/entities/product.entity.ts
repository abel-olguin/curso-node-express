import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, type Relation} from 'typeorm';
import {Category} from './category.entity';
import {Base} from './base';

@Entity({name: 'products'})
export class Product extends Base {
  searchFields = ['name'];

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category_id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @ManyToOne(() => Category, category => category.products)
  @JoinColumn({name: 'category_id'})
  category: Relation<Category>;

  toJSON() {
    const {id, name, description, price, category} = this;
    return {id, name, description, price, category};
  }
}