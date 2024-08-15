const csvService = require("../services/csvService");
const { getLocalizedMessage } = require("../utils/localeHandler");
const csvCollection = require("../mappers/csvCollection");
const DeleteRequestDTO = require("../dto/csvDTO/DeleteRequestDTO");

const uploadCSV = async (req, res) => {
	const validatedCSVData = req.validatedCSVData;

	try {
		await csvService.uploadCSV(validatedCSVData, req.user_id);
		res
			.status(200)
			.json({ message: getLocalizedMessage("MESSAGES.SUCCESSFUL") });
	} catch (e) {
		res.status(e.code).send({ error: e.message });
	}
};

const index = async (req, res) => {
	const allCsv = await csvService.getAll(req.user_id);

	res.json({
		data: csvCollection(allCsv),
	});
};

const deleteCsv = async (req, res) => {
	const { code } = req.params;
	const userId = req.user_id;

	try {
		await csvService.deleteOne(
			new DeleteRequestDTO().setUserId(userId).setCode(code)
		);
		return res
			.status(200)
			.json({ message: getLocalizedMessage("MESSAGES.SUCCESSFUL") });
	} catch (err) {
		return res.status(err.code).json({ error: err.message });
	}
};

module.exports = {
	uploadCSV,
	index,
	deleteCsv,
};
