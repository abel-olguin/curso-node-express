import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, type Relation} from 'typeorm';
import {Category} from './category.entity';

@Entity({name: 'products'})
export class Product extends BaseEntity {
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
}