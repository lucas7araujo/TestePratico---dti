const API = 'http://localhost:3000/alunos';

const formulario_aluno = document.getElementById('formulario_aluno');

formulario_aluno.addEventListener('submit', evento => {
    evento.preventDefault();

    const formAlunos = new FormData(formulario_aluno);
    const alunos = Object.fromEntries(formAlunos);

    fetch(API, {
        method: 'POST',
        headers: {
            'Content-type': "application/json"
        },
        body: JSON.stringify(alunos)
    }).then(res => res.json()).then(alunos => console.log(alunos));
    location.reload();
});

const listaDeAlunos = document.getElementById('lista_alunos');

async function carregaAlunos() {

    const resposta = await fetch(API);
    if (resposta.status === 200) {
        const alunos = await resposta.json();
        console.log(alunos);
        listaDeAlunos.innerHTML = '';

        alunos.forEach(aluno => {

            const card = document.createElement('div');
            card.classList.add('card_aluno');

            card.innerHTML = `
        
        <p>Nome: ${aluno.nome_aluno}<p>
        
        `
            listaDeAlunos.appendChild(card);
        });
    }

}

carregaAlunos();

async function carregaMedias() {
    const resposta = await fetch(API);
    if (resposta.status === 200) {
        const mediaNotas = await resposta.json();
        console.log(mediaNotas);
    }
}
