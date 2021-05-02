const { Sequelize, DataTypes } = require('sequelize');
import { sequelize } from "../configurations/sequelize";

const EmployeeSchema = sequelize.define('Employee', {
  employee_id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  first_name: DataTypes.STRING,
  last_name : DataTypes.STRING,
  age: DataType.STRING,
  Join_date : DataType.STRING
}, {
  tableName: "Employees",
  timestamps: false
});

module.exports = { EmployeeSchema }