const { retornaAlunos } = require("./alunosRepository");

function retornAlunosInfrequentes() {

    const alunos = retornaAlunos();

    const alunosInfrequentes = alunos.filter(aluno => Number(aluno.aluno_frequencia) <= 75);

    return alunosInfrequentes;

}

module.exports = {
    retornAlunosInfrequentes
};