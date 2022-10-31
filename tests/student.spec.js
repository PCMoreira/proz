const repository = require('../src/models/student');
const service = require('../src/services/students');
const mocks = require('./__mocks__/studentMock')

describe('Testing Student Service', () => {

    beforeEach(() => {
        jest.resetAllMocks();
    })

    it('When save is called', async () => {
        jest.spyOn(repository, 'create')
            .mockResolvedValueOnce(mocks.mockStudent);
        const result = await service.save(mocks.mockInputSave);
        expect(repository.create).toHaveBeenCalledTimes(1);
        expect(result).toEqual(mocks.mockStudent);
    });

    it('When findAll is called', async () => {
        jest.spyOn(repository, 'findAll')
            .mockResolvedValueOnce([mocks.mockStudent]);
        const result = await service.findAll();
        expect(repository.findAll).toHaveBeenCalledTimes(1);
        expect(result).toEqual([mocks.mockStudent]);
    });

    it('When findById is called', async () => {
        jest.spyOn(repository, 'findByPk')
            .mockImplementation((id) => {
                return mocks.mockManyStudents
                    .filter(
                        item => item.id === id
                    )[0];
            })
        const result = await service.findById(1);
        expect(repository.findByPk).toHaveBeenCalledTimes(1);
        expect(result).toEqual(mocks.mockStudent);
    });

    it('When update is called', async () => {
        const mockGenre = { genre: 'Feminino' };
        jest.spyOn(repository, 'update')
            .mockResolvedValueOnce();
        jest.spyOn(repository, 'findByPk')
            .mockImplementation((id) => {
                let result = mocks.mockManyStudents
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
                return mocks.mockManyStudents
                    .filter(
                        item => item.id !== id
                    )[0];
            })
        const result = await service.deleteStudent(1);
        expect(repository.destroy).toHaveBeenCalledTimes(1);
        expect(result).toEqual(mocks.mockManyStudents[0]);
    });

})