import {User} from '../database/entities/user.entity';
import {StoreUserRequestDataType} from '../types';
import {BadCredentialsError} from '../errors/exceptions';
import {Response} from 'express';
import {compare} from 'bcryptjs';
import {jwtRefreshSecret, jwtSecret} from '../config/app';
import jwt from 'jsonwebtoken';

export class UserService {
  static async signUp(data: StoreUserRequestDataType) {
    const {email, password, name} = data;
    return await User.create({email, password, name}).save();
  }

  static async login(res: Response, email: string, password: string) {
    const user = await User.findOne({where: {email}});
    if (!user || !await compare(password, user.password)) throw new BadCredentialsError()

    res.cookie('refresh', this.getRefreshJwt(user), {
      httpOnly: true, maxAge: 24 * 60 * 60 * 1000, secure: true,
    })
    return this.getJwt(user)
  }

  static async refresh(token: string) {
    return jwt.verify(token, jwtRefreshSecret, async (err, decoded) => {
      if (err) throw new BadCredentialsError()
      const user = await User.findOne({where: {email: decoded.data.email}});
      if (!user) throw new BadCredentialsError()
      return this.getJwt(user)
    })
  }

  private static getRefreshJwt(user: User) {
    const exp = Math.floor(Date.now() / 1000) + 60 * 60;
    return jwt.sign({
      exp, data: {
        email: user.email,
      }
    }, jwtRefreshSecret);
  }

  private static getJwt(user: User) {
    const exp = Math.floor(Date.now() / 1000) + 60 * 60;
    const token = jwt.sign({
      exp, data: {
        id:    user.id,
        email: user.email,
        name:  user.name,
        image: user.image
      }
    }, jwtSecret);
    return {
      token,
      exp,
      type: 'Bearer'
    }
  }
}