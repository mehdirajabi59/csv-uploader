const csvService = require("../services/csvService");
const { getLocalizedMessage } = require("../utils/localeHandler");

const uploadCSV = async (req, res) => {
	const validatedCSVData = req.validatedCSVData;

	try {
		await csvService.uploadCSV(validatedCSVData, req.user_id);
		res
			.status(200)
			.json({ message: getLocalizedMessage("MESSAGES.SUCCESSFUL") });
	} catch (e) {
		res.status(e.code).send({ message: e.message });
	}
};

module.exports = {
	uploadCSV,
};
