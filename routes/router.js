const express = require('express');
const router = new express.Router();
const Products = require('../model/productSchema');



//post all products api

router.post('/getallproducts', async(req,res) => {
    try {
        const productsdata = await Products.find();
        res.status(201).json(productsdata);
    } catch (error) {
        console.log('error' + error.message);
    }
});

//post individual data

router.get('/getproductsone/:id' , async(req,res) =>{
    try {
        const {id} = req.params;
        console.log(id);
        const individualdata = await Products.findOne({id:id});
        res.status(201).json(individualdata);
    } catch (error) {
        res.status(400).json(individualdata);
        console.log('error' + error.message);
        
    }
})
