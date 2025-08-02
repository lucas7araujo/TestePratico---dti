const { retornaAlunos } = require("./alunosRepository");
const { retornaMediaDaTurma } = require("./alunosMediaRepository");

function retornaAlunosAcimaDaMedia() {
    const alunos = retornaAlunos();
    const mediaGeral = retornaMediaDaTurma(alunos);
    
    const alunosAcimaDaMedia = alunos.filter(aluno => Number(aluno.media_notas) >= mediaGeral);

    return alunosAcimaDaMedia;
}

module.exports = {
    retornaAlunosAcimaDaMedia
};
