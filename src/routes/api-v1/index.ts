import {products} from './products.routes';
import {appRouter} from '../router';

export const apiV1 = appRouter();

apiV1.use(products)

