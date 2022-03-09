const Sequelize = require('sequelize').Sequelize;
const sequelize = require('../database');

const Class = sequelize.define('class', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true,
    },

});

module.exports = Class;