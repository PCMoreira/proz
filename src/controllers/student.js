const studentService = require('../services/students');

const registerStudent = async (content) => {
    try {
        await studentService.save(content);
    } catch (error) {
        console.log(error)
        throw new Error('ERROR_TO_SAVE_STUDENT');
    }
};

const getAllStudents = async (req, res) => {
    try {
        const students = await studentService.findAll();
        const reqStatus = students.length ? 200 : 204;
        res.status(reqStatus).json({
            data: {
                message: 'successfully find all',
                content: students
            }
        });
    } catch (error) {
        console.log(error);
        throw new Error('ERROR_TO_FIND_ALL_STUDENTS');
    }
};

const find = async (req, res) => {
    try {
        const id = req.params.id;
        const student = await studentService.findById(id);
        res.status(200).json({
            data: {
                message: 'resource retrieved successfully',
                content: student || [],
            }
        })
    } catch (error) {
        console.log(error);
        throw new Error('ERROR_TO_FIND_STUDENT');
    };
};

const update = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const student = await studentService.update(body, id);
        res.json({
            data: {
                message: 'successfully updated',
                content: student,
            }
        });
    } catch (error) {
        console.log(error);
        throw new Error('ERROR_TO_UPDATE_STUDENT');
    }
};

const deleteStudent = async (req, res) => {
    try {
        await studentService.deleteStudent(req.params.id);
        res.status(204).json();
    } catch (error) {
        console.log(error);
        throw new Error('ERROR_TO_DELETE_STUDENT');
    }
};

module.exports = {
    registerStudent,
    getAllStudents,
    find,
    deleteStudent,
    update
}