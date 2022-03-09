const {Schema,model} = require('mongoose');
const studentSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    student_id: {
        type: String,
        required: true
    },
});

module.exports = model('Student',studentSchema);

// const Sequelize = require('sequelize');
// const sequelize = require('../database');
// const Student = sequelize.define('student',{
//     id: {
//         type: Sequelize.INTEGER.UNSIGNED,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     fname: {
//         type: Sequelize.STRING,
//         allowNull: false,
//     },
//     lname: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     full_name: {
//         type: Sequelize.VIRTUAL,
//         get() {
//             return this.fname + ' ' + this.lname; 
//         }
//     }
//     ,
//     student_id: {
//         type: Sequelize.STRING,
//         unique: true,
//         allowNull: false
//     }
// });

// module.exports = Student;