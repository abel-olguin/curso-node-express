import {Request, Response} from 'express';
import {UserService} from '../services/user.service';

export class AuthController {
  async signUp(req: Request, res: Response) {
    res.sendJson({data: await UserService.signUp(res.locals.validated)});
  }

  async login(req: Request, res: Response) {
    const {email, password} = req.body;
    const tokenData = await UserService.login(res, email, password);
    res.sendJson({data: tokenData});
  }

  async refresh(req: Request, res: Response) {
    const tokenData = await UserService.refresh(req.cookies.refresh);
    res.sendJson({data: tokenData});
  }
}