const mongoose = require("mongoose");
const csvDataSchema = new mongoose.Schema({
	code: {
		type: String,
		required: true,
		unique: true,
	},
	data: {
		type: Object,
		required: true,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
});

module.exports = mongoose.model("CsvData", csvDataSchema);
