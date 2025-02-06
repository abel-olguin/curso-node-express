import {z} from 'zod';
import {validatorType} from '../app/types';

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