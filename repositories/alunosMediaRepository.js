const alunos = require("./alunosRepository").retornaAlunos();

const total = alunos.length;

let somaNota1 = 0, somaNota2 = 0, somaNota3 = 0, somaNota4 = 0, somaNota5 = 0;

alunos.forEach(aluno => {
    somaNota1 += aluno.aluno_nota1;
    somaNota2 += aluno.aluno_nota2;
    somaNota3 += aluno.aluno_nota3;
    somaNota4 += aluno.aluno_nota4;
    somaNota5 += aluno.aluno_nota5;
});

const mediaNotas = [
    {
        nota: "nota1",
        media: somaNota1 / total
    },
    {
        nota: "nota2",
        media: somaNota2 / total
    },
    {
        nota: "nota3",
        media: somaNota3 / total
    },
    {
        nota: "nota4",
        media: somaNota4 / total
    },
    {
        nota: "nota5",
        media: somaNota5 / total
    }
];

function retornaMedias() {
    return mediaNotas;
}

module.exports = {
    retornaMedias
};