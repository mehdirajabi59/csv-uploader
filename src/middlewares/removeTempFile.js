const fs = require("fs");

const removeTempFile = async (req, res, next) => {
	const file = req.file;
	fs.unlinkSync(file.path); // Delete the file if validation fails
	next();
};
module.exports = removeTempFile;
