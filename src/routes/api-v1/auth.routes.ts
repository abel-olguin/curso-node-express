import {appRouter} from '../router';
import {AuthController} from '../../app/controllers/auth.controller';
import {authValidator, signUpValidator} from './validators/auth.validators';
import {validate} from '../middlewares';
import {asyncHandler} from '../../app/errors/handler';

export const auth = appRouter();

const authController = new AuthController();
auth.post('/auth/signup', validate(signUpValidator), asyncHandler(authController.signUp))
auth.post('/auth/login', validate(authValidator), asyncHandler(authController.login))
