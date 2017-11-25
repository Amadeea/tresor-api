const db = require('./db.js')
const Sequelize = require('sequelize')

var User = db.define('users', {
  userId: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  userName: Sequelize.STRING,
  hash: Sequelize.STRING,
  email: Sequelize.STRING
});

export function registerUser(registration) {
  return db.sync().then(() => { 
    return User.create({
      userName: registration.userName,
      hash: registration.hash,
      email: registration.email
    });
  });
}

export function getUserByUserName(userName) {
  return User.findOne({
    where: { userName: userName }
  });
}