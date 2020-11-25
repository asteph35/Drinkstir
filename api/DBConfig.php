<?php
class DBConfig{

  protected $connection;
  var mysql      = require('mysql');
  var fs         = require('fs');
  var connection = mysql.createConnection({
  host     : 'db-mysql-nyc1-77368-do-user-8345208-0.b.db.ondigitalocean.com',
  database : 'defaultdb',
  port	   : '25060',
  user     : 'doadmin',
  password : ' jfsqb38n1f36zx0v',
  
});
connection.connect();
connection.query('SELECT * FROM Droplets', function(err, rows, fields) {
  if (err) throw err;
  console.log(rows);
});

connection.end();










}
?>
