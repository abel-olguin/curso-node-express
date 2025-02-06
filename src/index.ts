import {apiV1} from './routes/api-v1';
import {app} from './routes/router';
import {AppDataSource} from './app/database/datasource';
import {port} from './app/config/app';
import express from 'express';
import {handleError} from './app/errors/handler';

export async function start() {
  await AppDataSource.initialize().then(() => {
    console.log('Database connected');
  }).catch((err) => {
    console.log('Error connecting database', err);
  })

  app.use(express.json());
  app.use('/api/v1', apiV1)

  app.use(handleError)

  app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
  })
}

start()

