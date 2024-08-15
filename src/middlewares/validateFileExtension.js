// Middleware to check the file extension
const fs = require("fs");
const path = require("path");
const { getLocalizedMessage } = require("../utils/localeHandler");
const validateFileExtension = (req, res, next) => {
	const file = req.file;
	const allowedExtensions = [".csv"];

	if (!file) {
		return res.status(400).json({
			message: getLocalizedMessage("ERRORS.FILE_NOT_FOUND"),
		});
	}

	const ext = path.extname(file.originalname).toLowerCase();
	if (!allowedExtensions.includes(ext)) {
		fs.unlinkSync(file.path); // Delete the file immediately if invalid
		return res.status(400).json({
			message: getLocalizedMessage("ERRORS.FILE_CSV_EXTENSION_INVALID"),
		});
	}

	next();
};
module.exports = validateFileExtension;
