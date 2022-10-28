const Sequelize = require('sequelize');
const database = require('../db');

const File = database.define('file', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    file_name: {
        type: Sequelize.STRING
    },
    reference: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE,
    },
    updatedAt: {
        type: Sequelize.DATE
    }
});

module.exports = File;