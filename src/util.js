const Joi = require('joi');
exports.validate = (obj,objData) => {
    const schema = {
        courses: Joi.object({
        title: Joi.string().min(3).required(),
        code: Joi.string().min(3).required()
    }),
    students: Joi.object({
        fname: Joi.string().min(3).required(),
        lname: Joi.string().min(3).required(),
        student_id: Joi.string().alphanum().min(4).required(),
    }),
    classes: Joi.object({
        title: Joi.string().min(3).required(),
    }),
    projects: Joi.object({
        title: Joi.string().min(3).required(),
        userId: Joi.string().length(24).required()
    }),
    studentdetails: Joi.object({
        mobile1: Joi.string().min(3).required(),
        mobile2: Joi.string().min(3).optional(),
        address: Joi.string().alphanum().min(4).required(),
        email: Joi.string().email().required()
    }),

}
    const result = schema[obj].validate(objData);
    return result;
}

exports.send400 = (res,message) => {
    return res.status(400).send(message);
}