const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/api");

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", apiRoutes);

module.exports = app;
