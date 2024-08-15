require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");
const authRoutes = require("./src/routes/authRoutes");
const csvRoutes = require("./src/routes/csvRoutes");
const authenticationToken = require("./src/middlewares/authenticationToken");
const multer = require("multer");
const { connectRabbitMQ } = require("./src/config/rabbitmq");
const app = express();
connectDB();

app.use(express.json());
app.use("/api/users", authRoutes);
app.use("/api/csv", authenticationToken, csvRoutes);

const upload = multer({
	dest: process.cwd() + "/uploads/",
	limit: { fileSize: 1000000 }, //1MB
});

app.post("/", upload.single("file"), async (req, res) => {
	const { channel } = await connectRabbitMQ();
	const filePath = req.file;
	const userId = "66bb6be0d035fcf3ef775845";
	const message = { filePath, userId };
	channel.sendToQueue("queue1", Buffer.from(JSON.stringify(message)));
	res.json({ message: "ok" });
});

module.exports = app;
