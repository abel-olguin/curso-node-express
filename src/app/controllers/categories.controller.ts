import {Request, Response} from 'express';
import {BaseController} from './base.controller';
import {CategoryService} from '../services/category.service';

export class CategoriesController extends BaseController {
  async index(req: Request, res: Response) {
    res.sendJson({data: await CategoryService.findAll(req.query)})
  }

  async show(req: Request, res: Response) {
    res.sendJson({data: await CategoryService.find(Number(req.params.categoriesKey))})
  }

  async store(req: Request, res: Response) {
    res.sendJson({data: await CategoryService.store(res.locals.validated)})
  }

  async update(req: Request, res: Response) {
    res.sendJson({data: await CategoryService.update(Number(req.params.categoriesKey), res.locals.validated)})
  }

  async delete(req: Request, res: Response) {
    await CategoryService.delete(Number(req.params.categoriesKey));
    res.sendJson({data: {msg: 'Ok'}})
  }

}