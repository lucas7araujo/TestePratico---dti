const alunos = [
    {
        "nome_aluno": "Lucas",
        "aluno_nota1": "6",
        "aluno_nota2": "6",
        "aluno_nota3": "7",
        "aluno_nota4": "8",
        "aluno_nota5": "9",
        "aluno_frequencia": "10"
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