// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'tresor'
// });

// class DbWrapper{
//     register(username, password){
//         connection.connect();
//         connection.query("INSERT INTO `users`(`email`, `password`) VALUES (\""+username+"\",\""+password+"\")");
//         connection.end();
//     }

//     login(username, password){
//         connection.connect();

//         connection.end();
//     }

//     getTransaction(userId){
//         connection.connect();
//         var result = connection.query("SELECT * FROM `transactions` WHERE `user_id`="+userId);
//         console.log(result);
//         connection.end();
//         return result;
//     }

//     addTransaction(transactionId){

//     }

//     updateTransaction(transactionId){

//     }
// }

// module.exports = DbWrapper;
