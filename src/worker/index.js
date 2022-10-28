const studentController = require('../controllers/student');
const fileRepository = require('../models/file');
const xlsxToJson = require('convert-excel-to-json');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const BASE_PATH = fileName => path.resolve(__dirname, '..', 'tmp', fileName);

const fileProcessor = async (fileName) => {
    const filePath = BASE_PATH(fileName);
    const result = xlsxToJson({
        sourceFile: filePath,
        header: {
            rows: 1
        },
    });
    return result;
};

const mapStudent = (mapHeader, student) => Object
    .keys(mapHeader)
    .reduce((acc, item) => {
        const key = _.camelCase(mapHeader[item]);
        acc[key] = student[item];
        return acc;
    }, {});

const mapContent = content => {
    const header = _.head(content);
    const newContent = content.filter(item => ![header].includes(item));
    return newContent.map((student) => {
        return mapStudent(header, student);
    });
};

const saveFile = async (reference, fileName) => {
    const file = {
        file_name: fileName,
        reference: reference
    };
    await fileRepository.create(file);
}

const startWorker = async (message) => {
    const file = JSON.parse(message.content.toString());
    const content = await fileProcessor(file.fileName);
    const mappedContent = mapContent(content['Plan1']);
    await Promise.all(
        mappedContent.map(
            async (student) => await studentController.registerStudent(student)
        )
    );
    await saveFile(file.reference, file.fileName);
    fs.unlinkSync(BASE_PATH(file.fileName));
    console.log('<<< successfully registered students >>>');
};

module.exports = {
    startWorker
}