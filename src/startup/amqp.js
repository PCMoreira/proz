const amqplib = require('amqplib');
const worker = require('../worker');

const amqpUrl = process.env.AMQP_URL;
const queueName = process.env.AMQP_QUEUE;

let channelConnection

const createConnection = async () => {
    try {
        channelConnection = await amqplib.connect(amqpUrl, 'heartbeat=60');
        const channel = await channelConnection.createChannel();
        return channel;
    } catch (error) {
        console.log(error);
        throw new Error('ERROR_CONNECT_QUEUE');
    }
};

const createQueue = async (channel, queue) => {
    try {
        await channel.assertQueue(
            queue, { durable: true }
        );
        return channel
    }
    catch (error) {
        console.log(error);
        throw new Error('ERROR_CREATE_QUEUE');
    }
};

const sendToQueue = async (message) => {
    try {
        if (!channelConnection) {
            channelConnection = await createConnection();
        }
        await createQueue(channelConnection, queueName);
        await channelConnection.sendToQueue(queueName, Buffer.from(JSON.stringify(message)));
    } catch (error) {
        console.log(error);
        throw new Error('ERROR_TO_SEND_QUEUE');
    }
};

const consume = async () => {
    try {
        if (!channelConnection) {
            channelConnection = await createConnection();
        }
        const message = await channelConnection.consume(queueName, async (message) => {
            await worker.startWorker(message);
            channelConnection.ack(message)
        });
        return message;
    } catch (error) {
        console.log(error);
        throw new Error('ERROR_TO_CONSUME_QUEUE');
    }
};

module.exports = {
    sendToQueue,
    consume
}