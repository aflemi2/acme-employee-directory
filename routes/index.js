const app = require('express').Router();
const db = require('../db');
const models = db.models;
const { Employee } = models;

module.exports= app;

app.get('/', (req, res, next)=>{
  res.render('index', { title: 'Home' });
})

app.get('/employees', (req, res, next)=>{
  Employee.findAll()
  .then(employees => res.render('employees', { title: 'Employees', employees }))
  .catch(next);
})

app.get('/employees/:id', (req, res, next)=>{
  Employee.findById(req.params.id)
  .then( employee=> res.render('employee', { title: employee.fullName, employee }))
  .catch(next);
})
