import {appRouter} from '../router';
import {AuthController} from '../../app/controllers/auth.controller';
import {signUpValidator} from './validators/auth.validators';
import {validate} from '../middlewares';

export const auth = appRouter();

const authController = new AuthController();
auth.post('/auth/signup', validate(signUpValidator), authController.signUp)
