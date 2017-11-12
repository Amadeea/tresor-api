const db = require('./db.js')
const Sequelize = require('sequelize')

var User = db.define('users', {
  username: { type: Sequelize.STRING, primaryKey: true },
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
    where: {username: username}
  })
}