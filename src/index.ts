import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import * as process from 'node:process';

dotenv.config();

const app = express();

console.log('ex');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 2998);
