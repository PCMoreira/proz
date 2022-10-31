
const date = new Date();

const mockManyStudents = [
    {
        id: 1,
        name: 'João Padaria',
        marital_status: 'CASADO(A)',
        adress_email: 'jp@gmail.com',
        student_itr: '123.456.247-11',
        student_id: '11699814-4',
        birthday: '1999-04-26',
        genre: 'Masculino',
        createdAt: date,
        updatedAt: date
    },
    {
        id: 2,
        name: 'João Maria',
        marital_status: 'SOLTEIRO(A)',
        adress_email: 'joazinho@gmail.com',
        student_itr: '123.456.247-11',
        student_id: '11699814-4',
        birthday: '1999-04-26',
        genre: 'Masculino',
        createdAt: date,
        updatedAt: date
    }
];

const mockStudent = {
    id: 1,
    name: 'João Padaria',
    marital_status: 'CASADO(A)',
    adress_email: 'jp@gmail.com',
    student_itr: '123.456.247-11',
    student_id: '11699814-4',
    birthday: '1999-04-26',
    genre: 'Masculino',
    createdAt: date,
    updatedAt: date
};

const mockInputSave = {
    nomeDoAluno: 'Fulano das Coves',
    estadoCivil: 'SOLTEIRO(A)',
    email: 'fulano@gmail.com',
    cpf: '12342432324',
    rg: '3333333',
    dataDeNascimento: '27/5/1946',
    sexo: 'Masculino'
};

module.exports = {
    mockInputSave,
    mockStudent,
    mockManyStudents
}