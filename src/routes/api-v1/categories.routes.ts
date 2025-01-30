import {appRouter} from '../router';
import {CategoriesController} from '../../app/controllers/categories.controller';

export const categories = appRouter();


categories.resource('/categories', new CategoriesController)

