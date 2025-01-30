import {Request, Response} from 'express';
import {BaseController} from './base.controller';
import {Product} from '../database/entities/product.entity';

export class ProductsController extends BaseController {
  async index(_: Request, res: Response) {
    const products = await Product.find({take: 10});
    res.sendJson({data: products})
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