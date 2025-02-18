import {z} from 'zod';
import {validatorType} from '../app/types';
import {NextFunction, Request, Response} from 'express';
import {BadCredentialsError} from '../app/errors/exceptions';
import jwt from 'jsonwebtoken';
import {jwtSecret} from '../app/config/app';

export function validate(validator: validatorType) {
  return async (req: any, res: any, next: any) => {
    let validated: { [key: string]: any } = {};
    try {
      validated = await validator.parseAsync(req.body)
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.sendJson({data: {}, msg: 'Unprocessable Entity', status: 422, errors: err.issues})
        return
      }
      res.sendJson({data: [], status: 500, msg: 'error'})
    }
    res.locals.validated = validated
    next()
  }
}

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authorization = req?.headers?.authorization || false;
  if (!authorization) throw new BadCredentialsError()
  return jwt.verify(authorization.replace('Bearer ', ''), jwtSecret, (err, decoded) => {
    console.log(decoded)
    if (err) throw new BadCredentialsError()
    return next()
  })
}