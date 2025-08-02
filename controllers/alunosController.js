const  alunosRepository = require ("../repositories/alunosRepository");

function getAlunos (req, res) {
    const alunos = alunosRepository.retornaAlunos();
    res.json(alunos);
}

module.exports={
    getAlunos
}