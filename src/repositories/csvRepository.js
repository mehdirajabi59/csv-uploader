const CsvData = require("../models/csvData");
const CsvDTO = require("../dto/csvDTO/csvDTO");
const csv = require("../dto/csvDTO/csvDTO");
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
/**
 *
 * @param {string} userId
 * @returns {Promise<CsvDTO[]>}
 */
const getAll = async userId => {
	const data = await CsvData.find({ user: userId }, "-_id");
	const dto = [];

	data.forEach(row => {
		dto.push(new CsvDTO().setCode(row.code).setUser(userId).setData(row.data));
	});

	return dto;
};

/**
 * @param {DeleteRequestDTO} dto
 * @returns {Promise<boolean>}
 */
const isExists = async dto =>
	!!(await CsvData.findOne({ user: dto.getUserId(), code: dto.getCode() }));
/**
 * @param {DeleteRequestDTO} dto
 * @returns {Promise<void>}
 */
const deleteOne = async dto => {
	await CsvData.deleteOne({ user: dto.getUserId(), code: dto.getCode() });
};
module.exports = {
	createManyRecords,
	getAll,
	isExists,
	deleteOne,
};
