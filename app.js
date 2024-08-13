require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");
const authRoutes = require("./src/routes/authRoutes");
const app = express();
connectDB();

app.use(express.json());
app.use(authRoutes);
app.get("/", (req, res) => {
	res.send("Hello World!");
});

module.exports = app;
