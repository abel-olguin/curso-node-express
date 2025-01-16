import express from 'express';
import {apiV1} from './routes/api-v1';

const app = express();
const port = 3000

app.use('/api/v1', apiV1)

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
})