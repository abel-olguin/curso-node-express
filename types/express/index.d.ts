import {AppResponseType} from '../../src/app/types';

declare module 'express-serve-static-core' {
  interface Response {
    sendJson(response: AppResponseType): void
  }
}