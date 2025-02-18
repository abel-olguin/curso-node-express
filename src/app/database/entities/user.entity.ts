import {BaseEntity, BeforeInsert, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {genSalt, hash} from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {jwtSecret} from '../../config/app';

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


  getJwt() {
    const exp = Math.floor(Date.now() / 1000) + 60 * 60;
    const token = jwt.sign({
      exp, data: {
        id:    this.id,
        email: this.email,
        name:  this.name,
        image: this.image
      }
    }, jwtSecret);
    return {
      token,
      exp,
      type: 'Bearer'
    }
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