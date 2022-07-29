import mongoose from 'mongoose';

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('conected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });
