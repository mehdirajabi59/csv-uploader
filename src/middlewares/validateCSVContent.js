const fs = require("fs");
const csvParser = require("csv-parser");
const { getLocalizedMessage } = require("../utils/localeHandler");
// Middleware to validate the content of the CSV file
const validateCSVContentMiddleware = async (req, res, next) => {
	const file = req.file;

	if (!file) {
		return res.status(400).json({
			message: getLocalizedMessage("ERRORS.FILE_NOT_FOUND"),
		});
	}

	const csvDataArray = [];

	try {
		await new Promise((resolve, reject) => {
			fs.createReadStream(file.path)
				.pipe(csvParser())
				.on("data", chunk => {
					const { code, ...data } = chunk;
					// Validate each row
					if (code && data) {
						// Add further validation logic here if needed
						csvDataArray.push({
							code: code,
							data: data,
						});
					}
				})
				.on("end", resolve)
				.on("error", reject);
		});

		req.validatedCSVData = csvDataArray; // Store validated data in req
		if (csvDataArray.length === 0) {
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
