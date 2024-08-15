const express = require("express");
const multer = require("multer");

const router = express.Router();
const upload = multer({
	dest: process.cwd() + "/uploads/",
	limit: { fileSize: 1000000 }, //1MB
});
const csvController = require("../controllers/csvController");
const authenticationToken = require("../middlewares/authenticationToken");
const validateFileExtension = require("../middlewares/validateFileExtension");
const validateCSVContentMiddleware = require("../middlewares/validateCSVContent");
const removeTempFile = require("../middlewares/removeTempFile");

router.post(
	"/upload",
	upload.single("file"),
	validateFileExtension,
	validateCSVContentMiddleware,
	removeTempFile,
	csvController.uploadCSV
);

router.get("/", csvController.index);
router.delete("/:code", csvController.deleteCsv);

module.exports = router;
