const { connectRabbitMQ } = require("../config/rabbitmq");
const { parseCSV } = require("../utils/parseCSV");
const publishCSVFile = async (req, res) => {
	const { channel } = await connectRabbitMQ();
	const filePath = req.file;
	const userId = "66bb6be0d035fcf3ef775845";
	const records = await parseCSV(filePath.path);
	records.forEach(item => {
		channel.sendToQueue(
			"queue1",
			Buffer.from(
				JSON.stringify({
					data: item,
					user_id: userId,
				})
			)
		);
	});
	res.json({ message: "ok" });
};

module.exports = {
	publishCSVFile,
};
