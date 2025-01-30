import {products} from './products.routes';
import {appRouter} from '../router';
import {categories} from './categories.routes';

export const apiV1 = appRouter();

apiV1.use(products)
apiV1.use(categories)

