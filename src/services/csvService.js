const fs = require("fs");
const ServiceException = require("../exception/ServiceException");
const CSVInsertDTO = require("../dto/csvDTO/csvInsertDTO");
const { createManyRecords } = require("../repositories/csvRepository");
const { getLocalizedMessage } = require("../utils/localeHandler");

/**
 *
 * @param {array} csvArrayData
 * @param {string} userId
 * @returns {Promise<void>}
 */
const uploadCSV = async (csvArrayData, userId) => {
	try {
		const csvDataDTO = [];
		csvArrayData.forEach(csv => {
			csvDataDTO.push(
				new CSVInsertDTO().setCode(csv.code).setUser(userId).setData(csv.data)
			);
		});
		await createManyRecords(csvDataDTO);
	} catch (err) {
		if (err.code === 11000) {
			throw new ServiceException(
				getLocalizedMessage("ERRORS.DUPLICATE_ENTRY"),
				400
			);
		} else {
			throw new ServiceException(
				getLocalizedMessage("ERRORS.SERVER_ERROR"),
				500
			);
		}
	}
};

module.exports = {
	uploadCSV,
};
