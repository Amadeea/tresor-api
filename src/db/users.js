const db = require('./db.js')
const Sequelize = require('sequelize')

var User = db.define('users', {
  userid: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING
});

export function createUser(username, password, email) {
  return db.sync().then(() => { 
    return User.create({
      username: username,
      password: password,
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