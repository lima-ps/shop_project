<<<<<<< HEAD
//export default mongoose;
=======
import mongoose from 'mongoose';

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('conected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });
>>>>>>> 650f3325a1f0daee297d2e0a313c4403dff36ef6
