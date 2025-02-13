import {Request, Response} from 'express';
import {UserService} from '../services/user.service';

export class AuthController {
  async signUp(req: Request, res: Response) {
    res.sendJson({data: await UserService.signUp(res.locals.validated)});
  }
}