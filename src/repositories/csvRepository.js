const CsvData = require("../models/csvData");
/**
 * @param {array<CSVInsertDTO>} dto
 * @returns {Promise<void>}
 */
const createManyRecords = async dto => {
	const data = [];
	dto.forEach(row => {
		data.push({
			code: row.getCode(),
			data: row.getData(),
			user: row.getUser(),
		});
	});
	return CsvData.insertMany(data);
};

module.exports = {
	createManyRecords,
};
