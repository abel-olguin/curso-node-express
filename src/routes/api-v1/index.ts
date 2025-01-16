import express from 'express';
import {products} from './products.routes';

export const apiV1 = express.Router();

apiV1.use('/products', products)

