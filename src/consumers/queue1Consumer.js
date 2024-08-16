const { connectRabbitMQ, assertQueues } = require("../config/rabbitmq");
const csvService = require("../services/csvService");
const ServiceException = require("../exception/ServiceException");

const QUEUE1 = "queue1";

const startQueue1Consumer = async () => {
	const { channel } = await connectRabbitMQ();
	await assertQueues([QUEUE1]);
	channel.consume(QUEUE1, async msg => {
		const { data, user_id } = JSON.parse(msg.content.toString());
		try {
			await csvService.saveCSV([data], user_id);
			channel.ack(msg); // Acknowledge the message
		} catch (err) {
			if (err instanceof ServiceException) {
				channel.ack(msg);
			} else {
				console.error("Error processing queue1 message:", err);
				channel.nack(msg); // Negative acknowledgment
			}
		}
	});

	console.log(`Listening on ${QUEUE1}...`);
};

module.exports = {
	startQueue1Consumer,
};
