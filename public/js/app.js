const api = 'http://localhost:3000/alunos';
const apiMedias = 'http://localhost:3000/medias';
const apiMediaGeral = 'http://localhost:3000/medias/mediageral';
const apiAlunosInfrequentes = 'http://localhost:3000/infrequentes';
const apiAlunosAcimaDaMedia = 'http://localhost:3000/medias/mediageral';

const formulario_aluno = document.getElementById('formulario_aluno');

formulario_aluno.addEventListener('submit', evento => {
    evento.preventDefault();

    const formAlunos = new FormData(formulario_aluno);
    const alunos = Object.fromEntries(formAlunos);

    const soma =
        Number(alunos.aluno_nota1) +
        Number(alunos.aluno_nota2) +
        Number(alunos.aluno_nota3) +
        Number(alunos.aluno_nota4) +
        Number(alunos.aluno_nota5);

    alunos.media_notas = soma / 5;

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
const listaDeAlunosInfrequentes = document.getElementById('lista_infrequentes');

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
            
            <p>Nome: ${aluno.nome_aluno}</p>
            
            `
            listaDeAlunos.appendChild(card);
        });
    }

    const alunosInfrequentes = await fetch(apiAlunosInfrequentes);
    if (alunosInfrequentes.status === 200) {
        const infrequentes = await alunosInfrequentes.json();
        listaDeAlunosInfrequentes.innerHTML = '';

        infrequentes.forEach(infrequente => {

            const card = document.createElement('div');
            card.classList.add('card_aluno');

            card.innerHTML = `
            
            <p>Nome: ${infrequente.nome_aluno}</p>
            <p>Frequência: ${infrequente.aluno_frequencia}%</p>
            
            `
            listaDeAlunosInfrequentes.appendChild(card);
        });

    }

}

carregaAlunos();

const listaDeMedias = document.getElementById('lista_medias');
const mediaDaTurma = document.getElementById('media_turma')

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
            
            <p>${media.nota}</p>
            <p>${media.media}</p>
            
            `
            listaDeMedias.appendChild(card);

        });
    }

    mediaDaTurma.innerHTML = '';

    fetch(apiMediaGeral)
        .then(res => res.json())
        .then(data => {
            document.getElementById("media_turma").innerHTML = `
            <p>${data}</p>
            `;
        });

}

carregaMedias();
