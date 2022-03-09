const Sequelize = require('sequelize');
const sequelize = require('../database');
const Student = require('./student');
const StudentDetail = sequelize.define('studentDetail',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    mobile1: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    mobile2: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = StudentDetail;