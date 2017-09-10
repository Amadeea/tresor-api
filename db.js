var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'tresor'
});

connection.connect();

connection.query('SELECT * from users', function(error, results, fields){
    if(error) throw error;
    console.log('The result is: ', results[0]);
});

connection.end();
