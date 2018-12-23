const mysql = require('mysql');
// DB connection configurations test
const connection  = mysql.createPool({
    connectionLimit : 100,
    host: 'yesenterprise.co.in',
    user: 'yesenx84_dev_usr',
    password: 'Dev@2018',
    database: 'yesenx84_cloud_compare_dev'
  });

//DB connection configurations local 
// const connection=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'Test@123',
//     database:'cloud_comparision'
// });

module.exports = connection;