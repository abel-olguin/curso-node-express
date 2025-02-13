import {appRouter} from '../router';
import {CategoriesController} from '../../app/controllers/categories.controller';
import {storeCategoryValidator, updateCategoryValidator} from './validators/category.validators';

export const categories = appRouter();


categories.resource('/categories', new CategoriesController, {
  validators: {
    store: storeCategoryValidator, update: updateCategoryValidator
  }
})

