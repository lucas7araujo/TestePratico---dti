const alunos = [
    {
        "nome_aluno": "Lucas",
        "aluno_nota1": "10",
        "aluno_nota2": "10",
        "aluno_nota3": "10",
        "aluno_nota4": "10",
        "aluno_nota5": "10",
        "aluno_frequencia": "100",
        "media_notas": 10
    }
]

function retornaAlunos() {
    return alunos;
}

function adicionaAluno(novoAluno) {
    alunos.push(novoAluno);
    return novoAluno;
}

module.exports = {
    retornaAlunos,
    adicionaAluno
}