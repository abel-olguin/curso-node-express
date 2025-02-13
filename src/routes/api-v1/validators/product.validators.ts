import {z} from 'zod';
import {exists} from './index';

export const storeProductValidator = z.object({
  category_id: z.number().refine(exists('categories', 'id'), {message: 'Category does not exist'}),
  name:        z.string().min(5),
  description: z.string().min(8),
  price:       z.number().min(1)
})

export const updateProductValidator = z.object({
  category_id: z.number().refine(exists('categories', 'id'), {message: 'Category does not exist'}),
  name:        z.string().min(5),
  description: z.string().min(8),
  price:       z.number().min(1)
})