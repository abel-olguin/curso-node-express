import {z} from 'zod';
import {unique} from './index';

export const storeCategoryValidator = z.object({
  name: z.string().min(5),
  slug: z.string().min(5).refine(unique('categories', 'slug'),
    {message: 'Category already exists'})
})

export const updateCategoryValidator = z.object({
  name: z.string().min(5),
  slug: z.string().min(5).refine(unique('categories', 'slug'),
    {message: 'Category already exists'})
})