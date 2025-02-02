import {z} from 'zod';

export const storeProductValidator = z.object({
  name:        z.string().min(5),
  description: z.string().min(8),
  price:       z.number().min(1)
})

export const updateProductValidator = z.object({
  name:        z.string().min(5),
  description: z.string().min(8),
  price:       z.number().min(1)
})