/**
 *
 * @param {array<CsvDTO>} arrayDto
 * @returns {array}
 */
const csvCollection = arrayDto =>
	arrayDto.map(csv => ({
		code: csv.getCode(),
		user: csv.getUser(),
		data: csv.getData(),
	}));

module.exports = csvCollection;
