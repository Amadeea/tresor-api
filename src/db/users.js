const db = require('./db.js')
const Sequelize = require('sequelize')

var User = db.define('users', {
  userId: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  username: Sequelize.STRING,
  hash: Sequelize.STRING,
  email: Sequelize.STRING
});

export function createUser(username, hash, email) {
  return db.sync().then(() => { 
    return User.create({
      username: username,
      hash: hash,
      email: email
    });
  });
}

export function getUser(username) {
  return User.findOne({
    where: { username: username }
  }).catch(e => {
    return null
  });
}