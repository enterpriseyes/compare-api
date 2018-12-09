const express = require('express');
const productRouter = express.Router();
const Product = require('../dbqueries/products');

// GET All Products
productRouter.get('/Products', (req, res, next) => {
    Product.getAllProducts((err, rows) => {
        if (err)
            res.json(err);
        else
            res.json(rows);
    });
});

// GET All Products
productRouter.get('/Locations', (req, res, next) => {
Product.getProductLocations((err, rows) => {
    if (err)
        res.json(err);
    else
        res.json(rows);
});
});
// GET By product by sku 
productRouter.get('/Products/:id?', (req, res, next) => {
if (req.params.id) {
    Product.getProductBySku(req.params.id, (err, rows) => {
        if (err)
            res.json(err);
        else
            res.json(rows);
    });
}

});


// GET list of filtered products
productRouter.get('/getFilterredProducts/', (req, res, next) => {
    if (req.params) {
        Product.getFilterredProducts(
            req.query['noOfCPUS'],
            req.query['mrySize'],
            req.query['strgSize'],
            req.query['opsSys'],
            req.query['contLen'], 
            req.query['location'], (err, rows) => {
            if (err)
                res.json(err);
            else
                res.json(rows);
        });
    }
    });

    
// GET list of filtered products
productRouter.get('/getProductDetailsByIds/', (req, res, next) => {
    if (req.params) {
        Product.getProductDetailsByIds(
            req.query['listOfIDs'], req.query['selcContractLength'],
            (err, rows) => {
            if (err)
                res.json(err);
            else
                res.json(rows);
        });
    }
    });

module.exports=productRouter;