const express = require('express');
const cors = require('cors'); 
require('dotenv').config()
const app = express()
const port = process.env.EXPRESS_PORT
const hostname = process.env.EXPRESS_HOST

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/api/signin', require('./routes/auth'));
app.post('/api/login', require('./routes/auth'));

app.get('/api/allProducts', require('./routes/fetchProducts'));

app.get('/api/allCatgories', require('./routes/fetchCategories'));

app.get('/api/allProductsWithCategory', require('./routes/fetchProductWithCategory'));


app.listen(port, hostname,  () => {
  console.log(`Example app listening on port ${port}`)
});