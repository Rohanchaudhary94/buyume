const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    productId: String,
    quantity: Number,
    operation: Number
});

const Products = new mongoose.model('products' , productSchema);

module.exports = Products;