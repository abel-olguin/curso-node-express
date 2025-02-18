import {Request, Response} from 'express';
import {UserService} from '../services/user.service';

export class AuthController {
  async signUp(req: Request, res: Response) {
    res.sendJson({data: await UserService.signUp(res.locals.validated)});
  }

  async login(req: Request, res: Response) {
    const {email, password} = req.body;
    const user = await UserService.login(email, password);
    res.sendJson({data: user.getJwt()});
  }
}