const conn = require('./conn');

const Employee = require('./Employee');

const sync = ()=>{
  return conn.sync({ force: true });
}

const seed = ()=>{
  return Promise.all([
  Employee.create({ firstName: 'Dan', lastName: 'the man'}),
  Employee.create({ firstName: 'Steve', lastName: 'the man'}),
  Employee.create({ firstName: 'Bill', lastName: 'the tax man', nickNames: ['the axe man', 'the flax man', 'Bill relax man']}),
])
}

module.exports = {
  sync,
  seed,
  models: {
    Employee
  }
}
