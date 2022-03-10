const express = require('express');
const app = express()

app.get('/',(req,res)=> {
    res.send('this is node!!');
})

app.listen(3000,()=> {
    console.log('app started on 3000');
})