const db = require('../dbConnection');
var Rates = {
    getProductPriceBySku: (Sku,LeaseContractLength, callback) => {
        if(!LeaseContractLength)
        LeaseContractLength='';
        db.query('CALL getAllPriceOfSku(\''+Sku+'\',\''+LeaseContractLength+'\');',callback);
    },
    getProductPriceByOfferTermCode: (OfferTermCode, callback) => {
        db.query('SELECT * FROM PRICING_RATE WHERE Offer_Term_Code=?', [OfferTermCode], callback);
    },
    getProductPriceByRateCode: (RateCode, callback) => {
        db.query('SELECT * FROM PRICING_RATE WHERE Rate_Code=?', [RateCode], callback);
    },
    getProductPriceLeaseContractLength: (LeaseContractLength, callback) => {
        db.query('SELECT * FROM PRICING_RATE WHERE Lease_Contract_length=?', [LeaseContractLength], callback);
    },
    getProductPricePurchaseOption: (PurchaseOption, callback) => {
        db.query('SELECT * FROM PRICING_RATE WHERE Purchase_Option=?', [PurchaseOption], callback);
    }
}
module.exports = Rates;