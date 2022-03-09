const express = require('express');
const Util = require('./util.js');
const mongoose = require('mongoose');
const Student = require('./models/student');
const app = express();
const myModels = {};
myModels.students = Student;

app.use(express.json());
app.get('/', (req, res, next) => {
    res.send('hello world');
});

app.route('/api/:obj/:id')
.get((req, res) => {
    (async () => {
        if (1==1) {

            try {
                const result = await myModels[req.params.obj].findById(req.params.id);
                if (!result) return res.status(404).send('not found');
                res.send(result);
            } catch (error) {
                res.status(400).send(error);
                return
            }
        } else res.status(400).send('invalid request');
    })();
})
.put(async (req, res) => {
    const { error } = Util.validate(req.params.obj, req.body);
    if (error) {
        Util.send400(res, error.details[0].message)
        return
    }
    const result = await myModels[req.params.obj].updateOne( {_id: req.params.id},req.body);
    // await db.collection(req.params.obj).updateOne( {_id: id},{$set: req.body});
    // const result = await db.collection(req.params.obj).find({_id: id}).next()
    res.send(result);
})
.delete(async (req, res) => {
    const db = getDB();
    const id = new mongodb.ObjectId(req.params.id);
    const result = await db.collection(req.params.obj).find({_id: id}).next();
    await db.collection(req.params.obj).deleteOne( {_id: id});
    res.send(result);
});

///////////////////// /obj routes start here

app.route('/api/:obj/')
    .get(async (req, res) => {
       
        const result =  await myModels[req.params.obj].find();
        if (result.length < 1) return res.status(404).send('not found');
        res.send(result);
    }).post(async (req, res) => {
        const { error } = Util.validate(req.params.obj, req.body);
        if (error) {
            Util.send400(res, error.details[0].message)
            return;
        }
        if(req.body.userId) req.body.userId = new mongodb.ObjectId(req.body.userId);
        const result = await myModels[req.params.obj].create(req.body);
        console.log(result);
        res.send(result);
    });

async function getObj(_obj, _id, _res) {
    try {
        const result = await sequelize[_obj].findByPk(_id);
        return result;
    } catch (error) {
        return Util.send400(_res, error);
    }
}

app.use('/magic', (req, res) => {
    (async () => {
        const zeeshan = await Student.findByPk(1);
        const course = await Course.findByPk(1);
        //let result = await zeeshan.setCourses([ await Course.findByPk(1), await Course.findByPk(2)]);
        // res.send(await zeeshan.hasCourses([ await Course.findByPk(1), await Course.findByPk(2)]));
        let result = await zeeshan.addCourse(course,{through:{title: 'my class'}});
        res.send(result);
    })()
});

async function main() {

    const port = process.env.PORT || 8000;
    try{
       const result = await mongoose.connect('mongodb://zeeshan:password@localhost:27017/lms?authSource=admin');
       app.listen(port, console.log(`server started on port ${port}`,result));
    }catch(error) {
        console.log(error);
    }
} main();