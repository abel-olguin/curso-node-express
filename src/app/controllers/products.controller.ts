import {Request, Response} from 'express';

export class ProductsController {
  index(_: Request, res: Response): void {
    res.sendJson({data: []})
  }
}