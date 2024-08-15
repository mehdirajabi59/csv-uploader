const fs = require("fs");
const csvParser = require("csv-parser");

const parseCSV = filepath =>
	new Promise((resolve, reject) => {
		const records = [];
		fs.createReadStream(filepath)
			.pipe(csvParser())
			.on("data", row => {
				const { code, ...data } = row;
				// Validate each row
				if (code && data) {
					// Add further validation logic here if needed
					records.push({
						code: code,
						data: data,
					});
				}
			})
			.on("end", () => {
				resolve(records);
			})
			.on("error", err => {
				reject(err);
			});
	});

module.exports = {
	parseCSV,
};
