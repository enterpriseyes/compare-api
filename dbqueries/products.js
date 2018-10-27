const db= require('../dbConnection');
var Products = {
    getAllProducts:(callback)=>{
        db.query('CALL getProductsInitial();',callback);
    },
    getProductBySku:(Sku,callback)=>{
        db.query('SELECT * FROM products WHERE SKU=?',[Sku],callback);
    },
    getProductDetailsByIds:(listOfIDs,callback)=>{
        db.query('CALL getProductDetailsByIds('+listOfIDs+');',callback);
    },
    getProductLocations:(callback)=>{
        db.query('SELECT DISTINCT  LOCATION FROM products ORDER BY 1',callback);
    },
    getFilterredProducts:(noOfCPUS,memorySize,storageSize,operatingSystem,contLen, location, callback)=>{
        db.query('CALL getFilterredProducts(\''+noOfCPUS+'\',\''+memorySize+'\',\''+storageSize+'\',\''+operatingSystem+'\',\''+contLen+'\',\''+location+'\');',callback);
    }
  }
  module.exports=Products;