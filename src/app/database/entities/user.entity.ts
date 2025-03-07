import {BaseEntity, BeforeInsert, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {genSalt, hash} from 'bcryptjs';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @BeforeInsert()
  async hashPassword() {
    const salt = await genSalt(10);
    this.password = await hash(this.password, salt);
  }


  toJSON() {
    return {
      id:    this.id,
      email: this.email,
      name:  this.name,
      image: this.image,
    }
  }
}