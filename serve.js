import express from 'express';
import dotenv from 'dotenv';
import userRoute from './Routes/userRoute.js';
//import mongoosedb from './bd.js';
import mongoose from 'mongoose';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('conected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening in http://localhost:${port}`);
});
