const express = require('express')//configure express application
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const router=require('./routes/product')
require('dotenv').config()

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use('/api',router)

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err))

const productRoutes = require('./routes/product');
app.use('/api/product', productRoutes)

module.exports = app