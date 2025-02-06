import {NextFunction, Request, Response} from 'express';
import {NotFoundError} from './exceptions';
import {RequestFunction} from '../types';
import {EntityNotFoundError} from 'typeorm';

export const handleError = (err: Error, _: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }
  if (err instanceof NotFoundError || err instanceof EntityNotFoundError) {
    return res.sendJson({data: {}, msg: 'Not Found', status: 404});
  }
  res.sendJson({data: {}, msg: err.message, status: 500});
}


export const asyncHandler = (fn: RequestFunction) => (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(fn(req, res, next)).catch(next);
}