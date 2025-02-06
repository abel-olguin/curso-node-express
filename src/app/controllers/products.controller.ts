import {Request, Response} from 'express';
import {BaseController} from './base.controller';
import {Product} from '../database/entities/product.entity';

export class ProductsController extends BaseController {
  async index(_: Request, res: Response) {
    const products = await Product.find({take: 10});
    res.sendJson({data: products})
  }

  async show(req: Request, res: Response) {
    const product = await Product.findOneOrFail({where: {id: Number(req.params.productsKey)}});

    res.sendJson({data: product})
  }

  async store(req: Request, res: Response) {
    const product = new Product();
    product.name = req.body.name;
    product.category_id = req.body.category_id
    product.description = req.body.description
    product.price = req.body.price
    await product.save();
    res.sendJson({data: product})
  }

  async update(req: Request, res: Response) {
    const product = await Product.findOne({where: {id: Number(req.params.productsKey)}});
    if (product) {
      product.name = req.body.name;
      product.category_id = req.body.category_id
      product.description = req.body.description
      product.price = req.body.price
      await product.save();
    }

    res.sendJson({data: product})
  }

  async delete(req: Request, res: Response) {
    const product = await Product.findOne({where: {id: Number(req.params.productsKey)}});
    if (product) {
      await product.remove();
    }
    res.sendJson({data: {msg: 'Ok'}})
  }

}