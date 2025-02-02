import {z, ZodIssue} from 'zod';

export type AppResponseType = {
  msg?: string,
  data: object | [] | null,
  status?: number,
  errors?: string[] | ZodIssue[]
}
export type validatorType = z.ZodObject<{ [key: string]: z.ZodType }>;

export type ResourceOptionsType = {
  validators?: {
    [key: string]: validatorType
  }
}