const express = require('express');
const rateRouter = express.Router();
const Rates = require('../dbqueries/rates');

// GET Rate by SKU
rateRouter.get('/Rates/:id', (req, res, next) => {
    Rates.getProductPriceBySku(req.params.id,req.query['contLen'],(err, rows) => {
        if (err)
            res.json(err);
        else
            res.json(rows);
    });
});

// GET Rate by OTC
rateRouter.get('/RatesByOTC/:id?', (req, res, next) => {
    Rates.getProductPriceByOfferTermCode(req.params.id,(err, rows) => {
        if (err)
            res.json(err);
        else
            res.json(rows);
    });
});
// GET Rate by Rate Code
rateRouter.get('/RatesByRateCode/:id?', (req, res, next) => {
    Rates.getProductPriceByRateCode(req.params.id,(err, rows) => {
        if (err)
            res.json(err);
        else
            res.json(rows);
    });
});
// GET Rate by Rate Code
rateRouter.get('/RatesByContractLength/:id?', (req, res, next) => {
    Rates.getProductPriceLeaseContractLength(req.params.id,(err, rows) => {
        if (err)
            res.json(err);
        else
            res.json(rows);
    });
});
// GET Rate by Rate Code
rateRouter.get('/RatesByPO/:id?', (req, res, next) => {
    Rates.getProductPricePurchaseOption(req.params.id,(err, rows) => {
        if (err)
            res.json(err);
        else
            res.json(rows);
    });
});

module.exports=rateRouter;