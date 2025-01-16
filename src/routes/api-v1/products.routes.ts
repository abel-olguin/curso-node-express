import express from 'express';
import {ProductsController} from '../../app/controllers/products.controller';

export const products = express.Router();

const controller = new ProductsController()

products.get('/', controller.index)