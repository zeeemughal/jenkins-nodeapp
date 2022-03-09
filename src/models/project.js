const Sequelize = require('sequelize');
const sequelize = require('../database');
const Project = sequelize.define('project',{
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
    
})

module.exports = Project;