const studentFileService = require('../services/students-file');

const studentsRegister = async (req, res) => {
    try {
        const reference = req.params.reference;
        const fileName = req.file.filename;
        await studentFileService.sendFileToProcess(reference, fileName);
        res.json({
            data: {
                message: 'the file will be processed.'
            }
        })
    } catch (error) {
        console.log(error);
        throw new Error(
            'ERROR_TO_INSERT_STUDENTS_FILE_TO_QUEUE'
        );
    }
};

const checkFile = async (req, res) => {
    try {
        const reference = req.params.reference;
        const result = await studentFileService
            .isProcessed(reference);
        res.json({
            data: {
                isProcessed: result ? true : false,
            }
        })
    } catch (error) {
        console.log(error);
        throw new Error(
            'ERROR_TO_CHECK_FILE'
        );
    }
};

module.exports = {
    studentsRegister,
    checkFile
}