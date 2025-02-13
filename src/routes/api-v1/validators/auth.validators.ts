import {z} from 'zod';
import {unique} from './index';

export const authValidator = z.object({
  email:    z.string().email(),
  password: z.string().min(8)
})

export const signUpValidator = z.object({
  email:    z.string().email().refine(unique('users', 'email'), {message: 'Email already exists'}),
  password: z.string().min(8),
  name:     z.string().min(3),
  image:    z.string().optional()
})