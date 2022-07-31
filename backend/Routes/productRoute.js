import Product from '../models/productModel.js';
import express from 'express';

const productRoute = express.Router();

productRoute.get('/', async (req, res) => {
  const product = await Product.find();
  res.send(product);
});

productRoute.post('/insert', async (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    slug: req.body.slug,
    category: req.body.category,
    image: req.body.image,
    countInStock: req.body.countInStock,
    price: req.body.price,
    brand: req.body.brand,
    description: req.body.description,
  });
  const product = newProduct.save();
  res.send({
    name: req.body.name,
    slug: req.body.slug,
    category: req.body.category,
    image: req.body.image,
    countInStock: req.body.countInStock,
    price: req.body.price,
    brand: req.body.brand,
    description: req.body.description,
  });
  return;
});

export default productRoute;
