const dotenv = require("dotenv");
// Determine the environment and load the corresponding .env file
const envFile = process.env.NODE_ENV === "test" ? ".env.test" : ".env";
dotenv.config({ path: envFile });
const express = require("express");
const connectDB = require("./src/config/db");
const app = express();
connectDB();

module.exports = app;
