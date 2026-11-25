const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./Product');
const app = express();
app.use(cors());          // lets the Angular page (another port) call this server
app.use(express.json());  // lets the server read JSON sent in the request body
// MongoDB address (database name: campusstore)
// If you use MongoDB Atlas, put your Atlas connection string here instead
const MONGO_URL = 'mongodb://127.0.0.1:27017/campusstore';
mongoose.connect(MONGO_URL, { serverSelectionTimeoutMS: 5000 })
  .then(function () { console.log('MongoDB connected'); })
  .catch(function (err) {
    console.log('MongoDB NOT connected. Start MongoDB, then restart this server.');
    console.log(err.message);
  });
// If MongoDB is not connected, stop here and give a clear message
app.use('/api', function (req, res, next) {
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({
      message: 'Database not connected. Start MongoDB and restart the server.'
    });
  }
  next();
});
// GET /api/products : get all products
app.get('/api/products', async function (req, res) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Could not get products' });
  }
});
// POST /api/products : add a new product
app.post('/api/products', async function (req, res) {
  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: 'Could not add product: ' + err.message });
  }
});
// PUT /api/products/:id : update a product
app.put('/api/products/:id', async function (req, res) {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }   // return updated product, check rules
    );
    if (!updated) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: 'Could not update product: ' + err.message });
  }
});
// DELETE /api/products/:id : delete a product
app.delete('/api/products/:id', async function (req, res) {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Could not delete product' });
  }
});
// Start the server on port 3000
app.listen(3000, function () {
  console.log('Server running at http://localhost:3000');
});
