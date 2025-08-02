const alunosRepository = require("../repositories/alunosRepository");
const alunosMediaRepository = require("../repositories/alunosMediaRepository");
const alunosInfrequentesRepository = require("../repositories/infrequentesRepository");

function getAlunos(req, res) {
    const alunos = alunosRepository.retornaAlunos();
    res.json(alunos);
}

function postAluno(req, res) {
    const novoAluno = req.body;
    alunosRepository.adicionaAluno(novoAluno);
    res.status(201).json(novoAluno);
}

function getMedias(req, res){
    const mediaNotas = alunosMediaRepository.retornaMedias();
    res.json(mediaNotas);
}

function getInfrequentes(req, res){
    const infrequentes = alunosInfrequentesRepository.retornAlunosInfrequentes();
    res.json(infrequentes);
}


module.exports = {
    getAlunos,
    postAluno,
    getMedias,
    getInfrequentes
}