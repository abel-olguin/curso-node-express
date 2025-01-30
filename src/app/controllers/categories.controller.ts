import {Request, Response} from 'express';
import {BaseController} from './base.controller';
import {Category} from '../database/entities/category.entity';

export class CategoriesController extends BaseController {
  async index(_: Request, res: Response) {
    const categories = await Category.find({take: 10});
    res.sendJson({data: categories})
  }

  async show(req: Request, res: Response) {
    const category = await Category.findOne({where: {id: Number(req.params.categoriesKey)}});
    res.sendJson({data: category})
  }

  async store(req: Request, res: Response) {
    const category = new Category();
    category.name = req.body.name;
    category.slug = req.body.slug;
    await category.save();
    res.sendJson({data: category})
  }

  async update(req: Request, res: Response) {
    const category = await Category.findOne({where: {id: Number(req.params.categoriesKey)}});
    if (category) {
      category.name = req.body.name;
      category.slug = req.body.slug;
      await category.save();
    }

    res.sendJson({data: category})
  }

  async delete(req: Request, res: Response) {
    const category = await Category.findOne({where: {id: Number(req.params.categoriesKey)}});
    if (category) {
      await category.remove();
    }
    res.sendJson({data: {msg: 'Ok'}})
  }

}