require("dotenv").config();
const connectDB = require("./src/config/db");
const { startQueue1Consumer } = require("./src/consumers/queue1Consumer");
connectDB();
startQueue1Consumer().then(() => {
	console.log("Connected");
});
