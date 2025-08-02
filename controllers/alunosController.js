const alunosRepository = require("../repositories/alunosRepository");

function getAlunos(req, res) {
    const alunos = alunosRepository.retornaAlunos();
    res.json(alunos);
}

function postAluno(req, res) {
    const novoAluno = req.body;
    alunosRepository.adicionaAluno(novoAluno);
    res.status(201).json(novoAluno);
}

module.exports = {
    getAlunos,
    postAluno
}