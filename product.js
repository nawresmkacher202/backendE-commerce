
const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

router.get('/', async (req, res) => {//get products
    try {
        const products = await Product.find()
        res.json(products)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

router.post('/addProduct', async (req, res) => {//create products
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    })

    try {
        const newProduct = await product.save()
        res.status(201).json(newProduct)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

module.exports = router