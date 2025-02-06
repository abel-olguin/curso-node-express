import {Request, Response} from 'express';
import {BaseController} from './base.controller';
import {ProductService} from '../services/product.service';

export class ProductsController extends BaseController {
  async index(_: Request, res: Response) {
    res.sendJson({data: await ProductService.findAll()})
  }

  async show(req: Request, res: Response) {
    res.sendJson({data: await ProductService.find(Number(req.params.productsKey))})
  }

  async store(req: Request, res: Response) {
    res.sendJson({data: await ProductService.store(res.locals.validated)})
  }

  async update(req: Request, res: Response) {
    res.sendJson({data: await ProductService.update(Number(req.params.productsKey), res.locals.validated)})
  }

  async delete(req: Request, res: Response) {
    await ProductService.delete(Number(req.params.productsKey));
    res.sendJson({data: {msg: 'Ok'}})
  }

}