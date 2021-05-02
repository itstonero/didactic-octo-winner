const express = require('express');
const { connectSequelize } = require('./configuration/sequelize');
require("dotenv").config();

const app = express();


connectSequelize(false, true);

app.listen(process.env.PORT, console.log("Application Started on " + process.env.PORT))
