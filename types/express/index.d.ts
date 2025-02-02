import {AppResponseType} from '../../src/app/types';
import {ResourceControllerContract} from '../../src/app/contracts/resource-controller.contract';

declare module 'express-serve-static-core' {
  interface Router {
    resource(path: string, controller: ResourceControllerContract, options: ResourceOptionsType): void
  }

  interface Response {
    sendJson(response: AppResponseType): void
  }
}