const db= require('../dbConnection');
var Products = {
    getAllProducts:(callback)=>{
        db.query('CALL getProductsInitial();',callback);
    },
    getProductBySku:(Sku,callback)=>{
        db.query('CALL getProductDetails(\''+Sku+'\');',callback);
    },
    getProductDetailsByIds:(listOfIDs,contLen, callback)=>{
        db.query('CALL getProductDetailsByIds('+listOfIDs+','+contLen+');',callback);
    },
    getProductLocations:(callback)=>{
        db.query('SELECT DISTINCT  LOCATION FROM products ORDER BY 1',callback);
    },
    getFilterredProducts:(noOfCPUS,memorySize,storageSize,operatingSystem,contLen, location,pageSize,pageNo, callback)=>{
        db.query('CALL getFilterredProducts(\''+noOfCPUS+'\',\''+memorySize+'\',\''+storageSize+'\',\''+operatingSystem+'\',\''+contLen+'\',\''+location+'\',\''+pageSize+'\',\''+pageNo+'\');',callback);
    },
    getAllFilterredProducts:(noOfCPUS,memorySize,storageSize,operatingSystem,contLen, location, callback)=>{
        db.query('CALL getAllFilterredProducts(\''+noOfCPUS+'\',\''+memorySize+'\',\''+storageSize+'\',\''+operatingSystem+'\',\''+contLen+'\',\''+location+'\');',callback);
    }
  }
  module.exports=Products;