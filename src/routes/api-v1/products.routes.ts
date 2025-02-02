import {ProductsController} from '../../app/controllers/products.controller';
import {appRouter} from '../router';
import {storeProductValidator, updateProductValidator} from './validators/product.validators';

export const products = appRouter();


products.resource('/products', new ProductsController, {
  validators: {store: storeProductValidator, update: updateProductValidator}
})
