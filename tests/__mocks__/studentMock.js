const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

const student = {
    id: 1,
    name: 'João Padaria',
    marital_status: 'CASADO(A)',
    adress_email: 'jp@gmail.com',
    student_itr: '123.456.247-11',
    student_id: '11699814-4',
    birthday: '1999-04-26',
    genre: 'Masculino',
    createdAt: new Date(),
    updatedAt: new Date()
};

const StudentMock = dbMock.define('student', student);

StudentMock.$queryInterface.$useHandler((query, queryOptions, done) => {
    if (query === 'findAll') {
        return [student];
    }
});