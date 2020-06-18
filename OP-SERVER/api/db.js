/***
 * this file using for connect mysql database 
 */

var mysql = require('mysql');
var util = require('util');
var dbconnection      =    mysql.createPool({
    connectionLimit : 5,
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'dhl_nmiv',
    debug    :  false
});    
dbconnection.on('connection', function (connection) {
    console.log('DB Connection established');
    connection.on('error', function (err) {
      console.error(new Date(), 'MySQL error', err.code);
    });
    connection.on('close', function (err) {
      console.error(new Date(), 'MySQL close', err);
    });
  
  });
  
  dbconnection.query = util.promisify(dbconnection.query)

  module.exports = dbconnection;