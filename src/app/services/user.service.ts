import {User} from '../database/entities/user.entity';
import {StoreUserRequestDataType} from '../types';
import {BadCredentialsError} from '../errors/exceptions';
import {compare} from 'bcryptjs';

export class UserService {
  static async signUp(data: StoreUserRequestDataType) {
    const {email, password, name} = data;
    return await User.create({email, password, name}).save();
  }

  static async login(email: string, password: string) {
    const user = await User.findOne({where: {email}});
    if (!user || !await compare(password, user.password)) throw new BadCredentialsError()
    return user
  }
}