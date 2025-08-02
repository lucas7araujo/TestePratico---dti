const { retornaAlunos } = require("./alunosRepository");

function retornaMedias() {
    const alunos = retornaAlunos();
    const total = alunos.length;

    let somaNota1 = 0, somaNota2 = 0, somaNota3 = 0, somaNota4 = 0, somaNota5 = 0;

    alunos.forEach(aluno => {
        somaNota1 += Number(aluno.aluno_nota1);
        somaNota2 += Number(aluno.aluno_nota2);
        somaNota3 += Number(aluno.aluno_nota3);
        somaNota4 += Number(aluno.aluno_nota4);
        somaNota5 += Number(aluno.aluno_nota5);
    });

    return [
        {
            nota: "Média Nota 1:",
            media: somaNota1 / total
        },
        {
            nota: "Média Nota 2:",
            media: somaNota2 / total
        },
        {
            nota: "Média Nota 3:",
            media: somaNota3 / total
        },
        {
            nota: "Média Nota 4:",
            media: somaNota4 / total
        },
        {
            nota: "Média Nota 5:",
            media: somaNota5 / total
        }
    ];
}

function retornaMediaGeral(medias) {
    let soma = 0;
    for (let i = 0; i < medias.length; i++) {
        soma += medias[i].media;
    }
    return soma / medias.length;
}

function retornaMediaDaTurma(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma += alunos[i].media_notas;
    }
    return soma / alunos.length;
}

module.exports = {
    retornaMedias,
    retornaMediaGeral,
    retornaMediaDaTurma
};
