import express, {RouterOptions} from 'express';
import {AppResponseType} from '../app/types';
import {ResourceControllerContract} from '../app/contracts/resource-controller.contract';
import {toCamelCase} from '../app/helpers/string.helper';

export const app = express()

app.response.sendJson = function ({
                                    msg = 'Ok',
                                    data = {},
                                    status = 200,
                                    errors = []
                                  }: AppResponseType) {
  this.status(status).json({msg, data, status, errors});
}

export const appRouter = function (options?: RouterOptions) {
  const router = express.Router(options);

  router.resource = function (path: string, controller: ResourceControllerContract) {
    const name = path.replace('/', '')
    const resourceName = toCamelCase(path)
    const routes = {
      index:  {path: name, method: 'get'},
      show:   {path: `${name}/:${resourceName}Key`, method: 'get'},
      store:  {path: name, method: 'post'},
      update: {path: `${name}/:${resourceName}Key`, method: 'put'},
      delete: {path: `${name}/:${resourceName}Key`, method: 'delete'},
    }

    Object.keys(routes).forEach(routeName => {
      if (routeName in controller) {
        const routeItem = routes[routeName]
        const route = `/${routeItem.path}`
        this.route(route)[routeItem.method](controller[routeName])
      }
    })
  }
  return router;
}
