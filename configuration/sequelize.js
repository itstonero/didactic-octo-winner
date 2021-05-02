const { Sequelize } = require('sequelize');
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.USERNAME, process.env.PASSWORD, { dialect: process.env.DB_DIALECT, storage: process.env.DB_STORAGE })

const connectSequelize = async(alter = false, force = false) =>{
  try{
    await sequelize.sync({ alter, force });
    await sequelize.authenticate();
    return true;
  }catch(err){
    return false;
  }
}


module.exports =  { sequelize, connectSequelize }