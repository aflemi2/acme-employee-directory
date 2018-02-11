const conn = require('./conn');


const Employee = conn.define('employee', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  nickNames: Sequelize.ARRAY(Sequelize.STRING)
})

conn.sync({ force: true });
