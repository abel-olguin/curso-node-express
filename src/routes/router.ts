import express from 'express';
import {AppResponseType} from '../app/types';

export const app = express()

app.response.sendJson = function ({
                                    msg = 'Ok',
                                    data = {},
                                    status = 200,
                                    errors = []
                                  }: AppResponseType) {
  this.status(status).json({msg, data, status, errors});
}