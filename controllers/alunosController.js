const alunosRepository = require("../repositories/alunosRepository");
const alunosMediaRepository = require("../repositories/alunosMediaRepository");
const alunosInfrequentesRepository = require("../repositories/infrequentesRepository");
const alunosAcimaDaMediaRepository = require("../repositories/alunosAcimaDaMediaRepository");

function getAlunos(req, res) {
    const alunos = alunosRepository.retornaAlunos();
    res.status(200).json(alunos);
}

function postAluno(req, res) {
    const novoAluno = req.body;
    alunosRepository.adicionaAluno(novoAluno);
    res.status(201).json(novoAluno);
}

function getMedias(req, res) {
    const mediaNotas = alunosMediaRepository.retornaMedias();
    res.status(200).json(mediaNotas);
}

function getInfrequentes(req, res) {
    const infrequentes = alunosInfrequentesRepository.retornAlunosInfrequentes();
    res.status(200).json(infrequentes);
}

function getMediaGeral(req, res) {
    const medias = alunosMediaRepository.retornaMedias();
    const media = alunosMediaRepository.retornaMediaGeral(medias);
    res.status(200).json(media);
}

function getAlunosAcimaDaMedia(req, res) {
    const alunosAcimaDaMedia = alunosAcimaDaMediaRepository.retornaAlunosAcimaDaMedia();
    res.status(200).json(alunosAcimaDaMedia);
}


module.exports = {
    getAlunos,
    postAluno,
    getMedias,
    getInfrequentes,
    getMediaGeral,
    getAlunosAcimaDaMedia
}