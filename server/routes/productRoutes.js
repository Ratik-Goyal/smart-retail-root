const express =  require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
    const products = await Product.find();  
        res.json(products);    
});

router.post('/', async (req, res) => {
    const {name, quantity, price} = req.body;
    const newProduct = new Product({name, quantity, price});
    await newProduct.save();
    res.json(newProduct);
});

router.delete('/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;