import {z, ZodIssue} from 'zod';
import {NextFunction, Request, Response} from 'express';

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

export type StoreProductRequestDataType = {
  name: string,
  category_id: number,
  description: string,
  price: number
}

export type StoreCategoryRequestDataType = {
  name: string,
  slug: string,
}

export type StoreUserRequestDataType = {
  email: string,
  password: string,
  name: string,
  image?: string
}

export type QueryParamsType = {
  search: string | '',
  sortBy: string | '',
  direction: 'ASC' | 'DESC',
  page: number | 1,
  pageSize: number | 10
}

export type PaginationType = {
  page: number,
  pageSize: number,
  total: number,
  pages: number
}
export type RequestFunction = (req: Request, res: Response, next: NextFunction) => Promise<void>;