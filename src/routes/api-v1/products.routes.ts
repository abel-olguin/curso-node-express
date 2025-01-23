import {ProductsController} from '../../app/controllers/products.controller';
import {appRouter} from '../router';

export const products = appRouter();


products.resource('/products', new ProductsController)

