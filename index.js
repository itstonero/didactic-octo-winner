const express = require('express');
const { connectSequelize } = require('./configuration/sequelize');
const logger = require("./services/logger")

require("dotenv").config();

const app = express();
const employeeRouter = require("./router/employee");

app.use(express.json());
app.use("/api/v1/employees", employeeRouter);
app.use("*", (request, response)=> response.status(400).json({ message: "Route Unavailable"}));

connectSequelize(true, false);

app.listen(process.env.PORT, logger.info("Application Started on " + process.env.PORT))
