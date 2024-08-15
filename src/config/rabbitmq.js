const amqp = require("amqplib");

const RABBITMQ_URL = process.env.RABBITMQ_URL || "amqp://localhost";
console.log(RABBITMQ_URL);
let connection, channel;

const connectRabbitMQ = async () => {
	if (!connection) {
		connection = await amqp.connect(RABBITMQ_URL);
		channel = await connection.createChannel();
	}
	return { connection, channel };
};

const assertQueues = async queues => {
	const { channel } = await connectRabbitMQ();
	for (const queue of queues) {
		await channel.assertQueue(queue);
	}
};

module.exports = {
	connectRabbitMQ,
	assertQueues,
};
