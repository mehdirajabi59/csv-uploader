require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");
const authRoutes = require("./src/routes/authRoutes");
const csvRoutes = require("./src/routes/csvRoutes");
const authenticationToken = require("./src/middlewares/authenticationToken");
const app = express();
connectDB();

app.use(express.json());
app.use("/api/users", authRoutes);
app.use("/api/csv", authenticationToken, csvRoutes);
app.get("/", (req, res) => {
	res.send("Hello World!");
});

module.exports = app;
