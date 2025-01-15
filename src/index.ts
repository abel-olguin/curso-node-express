import express from 'express';

const app = express();
const port = 3000

app.get('/hola-mundo', (req, res) => {
  res.send('Hola Mundo');
})

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
})