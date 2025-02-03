import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import add from '@/utils/math';

dotenv.config();

const testMath = add(2, 3);

console.log(testMath);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 2998);

export default app;
