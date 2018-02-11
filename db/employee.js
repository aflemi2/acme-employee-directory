const conn = require('./conn');
const Sequelize = conn.Sequelize;


const Employee = conn.define('employee', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  nickNames: Sequelize.ARRAY(Sequelize.STRING)
}, {
  getterMethods: {
    fullName: function(){
      return `${this.firstName} ${this.lastName}`;
    }
  }
})

module.exports = Employee;
