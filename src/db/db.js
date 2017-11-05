const Sequelize = require('sequelize');

const db = new Sequelize("tresorDb", "tresor", "tresor123", {
    host: 'tresorDb',
    dialect: 'postgres',
    port: 5432,
    timezone: '+07:00',
    logging: false
});

module.exports = db;