import {Request, Response} from 'express';
import {ResourceControllerContract} from '../contracts/resource-controller.contract';

export class ProductsController implements ResourceControllerContract {
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