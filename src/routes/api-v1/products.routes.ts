import {ProductsController} from '../../app/controllers/products.controller';
import {appRouter} from '../router';
import {storeProductValidator, updateProductValidator} from './validators/product.validators';
import {authMiddleware} from '../middlewares';
import {asyncHandler} from '../../app/errors/handler';

export const products = appRouter();

products.use(asyncHandler(authMiddleware))
products.resource('/products', new ProductsController, {
  validators: {store: storeProductValidator, update: updateProductValidator}
})
