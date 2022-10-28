const repository = require('../src/models/student');
const service = require('../src/services/students');

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
        createdAt: new Date(),
        updatedAt: new Date()
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
        createdAt: new Date(),
        updatedAt: new Date()
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
    createdAt: new Date(),
    updatedAt: new Date()
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

describe('Testing Student Service', () => {

    beforeEach(() => {
        jest.resetAllMocks();
    })

    it('When save is called', async () => {
        jest.spyOn(repository, 'create')
            .mockResolvedValueOnce(mockStudent);
        const result = await service.save(mockInputSave);
        expect(repository.create).toHaveBeenCalledTimes(1);
        expect(result).toEqual(mockStudent);
    });

    it('When findAll is called', async () => {
        jest.spyOn(repository, 'findAll')
            .mockResolvedValueOnce([mockStudent]);
        const result = await service.findAll();
        expect(repository.findAll).toHaveBeenCalledTimes(1);
        expect(result).toEqual([mockStudent]);
    });

    it('When findById is called', async () => {
        jest.spyOn(repository, 'findByPk')
            .mockImplementation((id) => {
                return mockManyStudents
                    .filter(
                        item => item.id === id
                    )[0];
            })
        const result = await service.findById(1);
        expect(repository.findByPk).toHaveBeenCalledTimes(1);
        expect(result).toEqual(mockStudent);
    });

    it('When update is called', async () => {
        const mockGenre = { genre: 'Feminino' };
        jest.spyOn(repository, 'update')
            .mockResolvedValueOnce();
        jest.spyOn(repository, 'findByPk')
            .mockImplementation((id) => {
                let result = mockManyStudents
                    .filter(
                        item => item.id === id
                    )[0];
                const key = Object.keys(mockGenre);
                delete result[key];
                result[key] = mockGenre[key];
                return result;
            })
        const result = await service.update({ genre: 'Feminino' }, 1);
        expect(repository.findByPk).toHaveBeenCalledTimes(1);
        expect(repository.update).toHaveBeenCalledTimes(1);
        expect(result.genre).toEqual('Feminino');
    });

    it('When delete is called', async () => {
        jest.spyOn(repository, 'destroy')
            .mockImplementation((id) => {
                return mockManyStudents
                    .filter(
                        item => item.id !== id
                    )[0];
            })
        const result = await service.deleteStudent(1);
        expect(repository.destroy).toHaveBeenCalledTimes(1);
        expect(result).toEqual(mockManyStudents[0]);
    });

})