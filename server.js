const express = require('express');
const app = express();
const router = require('./routes');

const db = require('./db');
const { Employee } = db.models;
db.sync()
  .then(()=> db.seed());

//app.use('/', router);

app.get('/', ( req, res, next)=>{
  Employee.findAll()
    .then( employees => res.send(employees))
    .catch(next);
})

const port = 3000 || process.env.PORT;
app.listen(port, ()=>{
  console.log(`listening on ${port}!!!!`);
})



