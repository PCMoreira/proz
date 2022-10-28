const amqp = require('../startup/amqp');
const fileRepository = require('../models/file');

const sendFileToProcess = async (reference, fileName) => {
    const message = {
        fileName: fileName,
        reference
    };
    await amqp.sendToQueue(message)
};

const isProcessed = async (reference) => {
    const file = await fileRepository
        .findOne({ where: { reference: reference } });
    return file;
}

module.exports = {
    sendFileToProcess,
    isProcessed,
}