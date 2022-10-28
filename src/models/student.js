const Sequelize = require('sequelize');
const database = require('../db');

const Student = database.define('student', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING
    },
    marital_status: {
        type: Sequelize.STRING
    },
    adress_email: {
        type: Sequelize.STRING
    },
    student_itr: {
        type: Sequelize.STRING
    },
    student_id: {
        type: Sequelize.STRING
    },
    birthday: {
        type: Sequelize.DATEONLY
    },
    genre: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE,
    },
    updatedAt: {
        type: Sequelize.DATE
    }
});

module.exports = Student;