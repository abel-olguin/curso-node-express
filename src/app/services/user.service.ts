import {User} from '../database/entities/user.entity';
import {StoreUserRequestDataType} from '../types';

export class UserService {
  static async signUp(data: StoreUserRequestDataType) {
    const {email, password, name} = data;
    return await User.create({email, password, name}).save();
  }
}