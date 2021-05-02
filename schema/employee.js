const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require("../configuration/sequelize");

const EmployeeSchema = sequelize.define('Employee', {
  employee_id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  first_name: DataTypes.STRING,
  last_name : DataTypes.STRING,
  age: DataTypes.STRING,
  Join_date : DataTypes.STRING
}, {
  tableName: "Employees",
  timestamps: false
});

module.exports = EmployeeSchema