const studentRepository = require('../models/student');
const { assembleStudent } = require('../utils/assembler');

const save = async (content) => {
    const student = assembleStudent(content);
    return studentRepository.create(student);
};

const findAll = async () => studentRepository.findAll();

const findById = async (id) => studentRepository
    .findByPk(id);

const update = async (body, id) => {
    const studentToUpdate = body;
    await studentRepository.update(
        studentToUpdate,
        {
            where: { id }
        }
    );
    return findById(id);
};

const deleteStudent = async (id) => studentRepository.destroy({
    where: { id }
});

module.exports = {
    save,
    findAll,
    update,
    findById,
    deleteStudent,
}