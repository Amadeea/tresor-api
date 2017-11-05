const db = require('./db.js')
const Sequelize = require('sequelize')

var User = db.define('users', {
    userId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    username: Sequelize.STRING,
    password: Sequelize.STRING
  });

class DbUser {
    register(username, password){
        console.log(db)
        return db.sync().then(function() {
            return User.create({
              username: username,
              password: password
          });
        }).then(function(user) {
            console.log(user.get({
              plain: true
            }));
          });
    }
}

module.exports = DbUser