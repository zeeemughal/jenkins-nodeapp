const Sequelize = require('sequelize').Sequelize;
const sequelize = require('../database');

const Course = sequelize.define('course', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    code: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
});

module.exports = Course;