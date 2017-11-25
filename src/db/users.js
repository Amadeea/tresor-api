const db = require('./db.js')
const Sequelize = require('sequelize')

var User = db.define('users', {
  userId: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  userName: Sequelize.STRING,
  hash: Sequelize.STRING,
  email: Sequelize.STRING
});

export function createUser(userName, hash, email) {
  return db.sync().then(() => { 
    return User.create({
      userName: userName,
      hash: hash,
      email: email
    });
  });
}

export function getUser(userName) {
  return User.findOne({
    where: { userName: userName }
  }).catch(e => {
    return null
  });
}