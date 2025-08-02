const api = 'http://localhost:3000/alunos';
const apiMedias = 'http://localhost:3000/medias';

const formulario_aluno = document.getElementById('formulario_aluno');

formulario_aluno.addEventListener('submit', evento => {
    evento.preventDefault();

    const formAlunos = new FormData(formulario_aluno);
    const alunos = Object.fromEntries(formAlunos);

    fetch(api, {
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

    const resposta = await fetch(api);
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

const listaDeMedias = document.getElementById('lista_medias');

async function carregaMedias() {

    const medias = await fetch(apiMedias);
    if (medias.status === 200) {
        const mediaNotas = await medias.json();
        console.log(mediaNotas);

        listaDeMedias.innerHTML = '';

        mediaNotas.forEach(media => {

            const card = document.createElement('div');
            card.classList.add('card_aluno');

            card.innerHTML = `
            
            <p>${media.nota}<p>
            <p>${media.media}<p>
            
            `
            listaDeMedias.appendChild(card);

        });
    }
}

carregaMedias();
