const express = require('express');
const mongoose = require('mongoose');
const port = 8000;
const app = express();

const Products = require('./model/productSchema');
const router = require('./routes/router')

app.use(express.json());


const DB =  'mongodb://localhost:27017/buyume'

mongoose.connect(DB).then(() => {
 console.log('database connected');
}).catch((error) =>{
    console.log('error' + error.message);
})



app.listen(() =>{
    console.log(`server is listining on port number ${port} `);
})