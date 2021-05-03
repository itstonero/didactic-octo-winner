const express = require('express');
const { connectSequelize } = require('./configuration/sequelize');
const logger = require("./services/logger")
const employeeRouter = require("./router/employee");
const swaggerUi = require("swagger-ui-express")
const swaggerDoc = require("./documentation/docs")

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(logger.middleware);
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use("/api/v1/employees", employeeRouter);
app.use((request, response) => response.redirect("/api/v1/docs"));
//app.use("*", (request, response)=> response.status(400).json({ message: "Route Unavailable"}));

connectSequelize(true, false);

app.listen(process.env.PORT, logger.info("Application Started on " + process.env.PORT))
