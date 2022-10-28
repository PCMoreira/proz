const assembleStudent = content => ({
    name: content.nomeDoAluno,
    marital_status: content.estadoCivil,
    student_itr: content.cpf,
    student_id: content.rg,
    birthday: content.dataDeNascimento,
    genre: content.sexo,
    adress_email: content.email,
});


module.exports = {
    assembleStudent
}