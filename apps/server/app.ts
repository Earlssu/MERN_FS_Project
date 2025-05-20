import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.listen(5001, () => {
  console.log('Server is running on port 5001');
});
