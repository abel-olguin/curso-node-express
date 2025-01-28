import {Request, Response} from 'express';
import {BaseController} from './base.controller';

export class ProductsController extends BaseController {
  index(_: Request, res: Response): void {
    res.sendJson({data: []})
  }

  show(req: Request, res: Response): void {
    res.sendJson({data: {msg: `Hello show ${req.params['productsKey']}`}})
  }

  store(_: Request, res: Response): void {
    res.sendJson({data: {msg: 'Hello store'}})
  }

  update(_: Request, res: Response): void {
    res.sendJson({data: {msg: 'Hello update'}})
  }

  delete(_: Request, res: Response): void {
    res.sendJson({data: {msg: 'Hello delete'}})
  }

}