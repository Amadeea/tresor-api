var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'tresor'
});

class DbWrapper{
    register(username, password){
        connection.connect();
        console.log("INSERT INTO 'users'('email', 'password') VALUES ('"+username+"','"+password+"')");
        connection.query("INSERT INTO `users`(`email`, `password`) VALUES (\""+username+"\",\""+password+"\")");
        connection.end();
    }
}

module.exports = DbWrapper;