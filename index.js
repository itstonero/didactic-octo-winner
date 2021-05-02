const express = require('express');
const { connectSequelize } = require('./configuration/sequelize');
require("dotenv").config();

const app = express();
const employeeRouter = require("./router/employee");

app.use("/api/v1/employees", employeeRouter);
app.use("*", (request, response)=> response.status(400).json({ message: "Route Unavailable"}));

connectSequelize(false, true);

app.listen(process.env.PORT, console.log("Application Started on " + process.env.PORT))
