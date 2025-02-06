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

export type RequestFunction = (req: Request, res: Response, next: NextFunction) => Promise<void>;