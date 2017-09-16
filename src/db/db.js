const Sequelize = require('sequelize');

const db = new Sequelize("tresor", "tresor", "tresor123", {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    timezone: '+07:00',
    logging: false
});

module.exports = db;