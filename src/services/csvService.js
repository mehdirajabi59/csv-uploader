const fs = require("fs");
const ServiceException = require("../exception/ServiceException");
const CSVInsertDTO = require("../dto/csvDTO/csvDTO");
const csvRepository = require("../repositories/csvRepository");
const { getLocalizedMessage } = require("../utils/localeHandler");

/**
 *
 * @param {array} csvArrayData
 * @param {string} userId
 * @returns {Promise<void>}
 */
const saveCSV = async (csvArrayData, userId) => {
	try {
		const csvDataDTO = [];
		csvArrayData.forEach(csv => {
			csvDataDTO.push(
				new CSVInsertDTO().setCode(csv.code).setUser(userId).setData(csv.data)
			);
		});
		await csvRepository.createManyRecords(csvDataDTO);
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

const getAll = async userId => csvRepository.getAll(userId);

/**
 *
 * @param {DeleteRequestDTO} dto
 * @returns {Promise<void>}
 */
const deleteOne = async dto => {
	if (!(await csvRepository.isExists(dto))) {
		throw new ServiceException(
			getLocalizedMessage("ERRORS.CSV_NOT_FOUND"),
			400
		);
	}
	await csvRepository.deleteOne(dto);
};
module.exports = {
	saveCSV,
	getAll,
	deleteOne,
};
