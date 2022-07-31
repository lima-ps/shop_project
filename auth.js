import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
<<<<<<< HEAD
      email: user.email,
      name: user.name,
=======
      name: user.name,
      email: user.email,
>>>>>>> 650f3325a1f0daee297d2e0a313c4403dff36ef6
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};

export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length);
<<<<<<< HEAD
    jwt.verify(token, process.env.JWT_SECRET, (err, encode) => {
=======
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
>>>>>>> 650f3325a1f0daee297d2e0a313c4403dff36ef6
      if (err) {
        res.status(401).send({ message: 'Invalid Token' });
      } else {
        req.user = decode;
<<<<<<< HEAD
        next();
=======
>>>>>>> 650f3325a1f0daee297d2e0a313c4403dff36ef6
      }
    });
  } else {
    res.status(401).send({ message: 'No Token' });
  }
};
