import {apiV1} from './routes/api-v1';
import {app} from './routes/router';

const port = 3000

app.use('/api/v1', apiV1)

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
})