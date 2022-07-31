import express from 'express';
import dotenv from 'dotenv';
import userRoute from './Routes/userRoute.js';
import productRoute from './Routes/productRoute.js';
import mongoose from './db.js';

dotenv.config();

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening in http://localhost:${port}`);
});
