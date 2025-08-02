const api = 'http://localhost:3000/alunos';
const apiMedias = 'http://localhost:3000/medias';
const apiMediaGeral = 'http://localhost:3000/medias/mediageral';
const apiAlunosInfrequentes = 'http://localhost:3000/infrequentes';
const apiAlunosAcimaDaMedia = 'http://localhost:3000/alunos/acimadamedia';

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
const listaDeAlunosAcimaDaMedia = document.getElementById('alunos_acimaDaMedia');

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

            <h2>${aluno.nome_aluno}</h2>
            <p>Média do Aluno: ${aluno.media_notas}</p>
            <p>Frequência do Aluno: ${aluno.aluno_frequencia}%</p>
            
            `
            listaDeAlunos.appendChild(card);
        });
    }

    const alunosInfrequentes = await fetch(apiAlunosInfrequentes);
    if (alunosInfrequentes.status === 200) {
        const infrequentes = await alunosInfrequentes.json();
        listaDeAlunosInfrequentes.innerHTML = '';

        if (infrequentes.length === 0) {
            listaDeAlunosInfrequentes.innerHTML = '(Linha Vazia)';
        } else {
            infrequentes.forEach(infrequente => {
                const card = document.createElement('div');
                card.classList.add('card_aluno');

                card.innerHTML = `
            <p>Nome: ${infrequente.nome_aluno}</p>
            <p>Frequência: ${infrequente.aluno_frequencia}%</p>
        `;

                listaDeAlunosInfrequentes.appendChild(card);
            });
        }


    }

    const alunosAcimaDaMedia = await fetch(apiAlunosAcimaDaMedia);
    if (alunosAcimaDaMedia.status === 200) {
        const acimaDaMedia = await alunosAcimaDaMedia.json();
        listaDeAlunosAcimaDaMedia.innerHTML = '';

        if (acimaDaMedia.length === 0) {
            listaDeAlunosAcimaDaMedia.innerHTML = '(Linha Vazia)';
        } else {
            acimaDaMedia.forEach(alunoComBoaNota => {
                const card = document.createElement('div');
                card.classList.add('card_aluno');

                card.innerHTML = `
            <p>Nome: ${alunoComBoaNota.nome_aluno}</p>
            <p>Média: ${alunoComBoaNota.media_notas}</p>
        `;

                listaDeAlunosAcimaDaMedia.appendChild(card);
            });
        }

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
            <h2>${media.nota}</h2>
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
            <h1>Média Geral da Turma: ${data}</h1>
            `;
        });

}

carregaMedias();
