var mysql = require('mysql');
var moment = require('moment');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tresor'
});

class DbWrapper{
    register(username, password){
        connection.connect();
        connection.query("INSERT INTO `users`(`email`, `password`) VALUES (\""+username+"\",\""+password+"\")");
        connection.end();
    }

    login(username, password){
        connection.connect();

        connection.end();
    }

    getTransaction(userId, callback){
        connection.connect();
        var result = connection.query("SELECT * FROM `transactions` WHERE `user_id`="+userId, function(error, result, fields){
            if (error){
                callback(error, null);
            }
            else {
                callback(null, result);
            }
        });
        connection.end();
    }

    addTransaction(data){
        connection.connect();
        connection.query("INSERT INTO `transactions`(`description`, `hashtag`, `amount`,`user_id`,`date`) VALUES (\""+data.description+"\",\""+data.hashtag+"\",\""+data.amount+"\",\""+data.user_id+"\",\""+data.date+"\")");
        connection.end();
    }

    updateTransaction(transactionId){
        connection.connect();
        connection.query("");
        connection.end();
    }
}

module.exports = DbWrapper;
