import {products} from './products.routes';
import {appRouter} from '../router';
import {categories} from './categories.routes';
import {auth} from './auth.routes';

export const apiV1 = appRouter();

apiV1.use(categories)
apiV1.use(auth)

apiV1.use(products)


