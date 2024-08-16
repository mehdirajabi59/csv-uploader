const express = require("express");
const authRoutes = require("./authRoutes");
const authenticationToken = require("../middlewares/authenticationToken");
const csvRoutes = require("./csvRoutes");
const multer = require("multer");
const testController = require("../controllers/testController");

const router = express.Router();
router.use("/api/users", authRoutes);
router.use("/api/csv", authenticationToken, csvRoutes);

const upload = multer({
	dest: process.cwd() + "/uploads/",
	limit: { fileSize: 1000000 }, //1MB
});
router.post(
	"/test_queue1",
	upload.single("file"),
	authenticationToken,
	testController.publishCSVFile
);

module.exports = router;
