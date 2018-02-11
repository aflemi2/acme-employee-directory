const db = require('./db');
const path = require('path');
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
nunjucks.configure({ noCache: true });

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));


app.set('view engine', 'html');
app.engine('html', nunjucks.render);

const { Employee } = db.models;

db.sync()
  .then(()=> db.seed());

  app.use((req, res, next)=>{
  Employee.findAll()
  .then( employees=> {
    res.locals.employeeCount = employees.length;
    next()
  })
  .catch(next)
})


app.use('/', require('./routes'));


app.get('/db', ( req, res, next)=>{
  Employee.findAll()
    .then( employees => res.send(employees))
    .catch(next);
})

const port = 3000 || process.env.PORT;
app.listen(port, ()=>{
  console.log(`listening on ${port}!!!!`);
})



