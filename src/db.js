const Sequelize = require('sequelize');
const dbConfig = require('./configs/db');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        dialect: 'mysql',
        host: dbConfig.HOST
    });

module.exports = sequelize;