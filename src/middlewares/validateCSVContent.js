const fs = require("fs");
const { getLocalizedMessage } = require("../utils/localeHandler");
const { parseCSV } = require("../utils/parseCSV");
// Middleware to validate the content of the CSV file
const validateCSVContentMiddleware = async (req, res, next) => {
	const file = req.file.path;

	if (!file) {
		return res.status(400).json({
			message: getLocalizedMessage("ERRORS.FILE_NOT_FOUND"),
		});
	}
	try {
		const records = await parseCSV(file);
		req.validatedCSVData = records; // Store validated data in req
		if (records.length === 0) {
			return res.status(400).json({
				message: getLocalizedMessage("ERRORS.CSV_CONTENT_INVALID"),
			});
		}
		next();
	} catch (err) {
		fs.unlinkSync(file.path); // Delete the file if validation fails
		return res.status(500).json({ message: err.message });
	}
};

module.exports = validateCSVContentMiddleware;
