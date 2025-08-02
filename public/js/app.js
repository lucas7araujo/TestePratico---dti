const api = 'http://localhost:3000/alunos';
const apiMedias = 'http://localhost:3000/medias';
const apiMediaGeral = 'http://localhost:3000/medias/mediageral';
const apiAlunosInfrequentes = 'http://localhost:3000/infrequentes';
const apiAlunosAcimaDaMedia = 'http://localhost:3000/alunos/acimadamedia';

const formulario_aluno = document.getElementById('formulario_aluno');

formulario_aluno.addEventListener('submit', async evento => {
    console.log('Entrou aqui 1')
    evento.preventDefault();

    const formAlunos = new FormData(formulario_aluno);
    const alunos = Object.fromEntries(formAlunos);

    console.log('formulario_aluno: ', alunos)

    const soma =
        Number(alunos.aluno_nota1) +
        Number(alunos.aluno_nota2) +
        Number(alunos.aluno_nota3) +
        Number(alunos.aluno_nota4) +
        Number(alunos.aluno_nota5);

    alunos.media_notas = soma / 5;

    try {
        const response = await fetch(api, {
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(alunos)
        });

        if (response.ok) {
            const result = await response.json();
            console.log(result);
            location.reload();
        } else {
            console.error('Erro ao enviar dados. Status:', response.status);
        }
    } catch (error) {
        console.error('Erro de rede ao enviar dados:', error);
    }
});

const listaDeAlunos = document.getElementById('lista_alunos');
const listaDeAlunosInfrequentes = document.getElementById('lista_infrequentes');
const listaDeAlunosAcimaDaMedia = document.getElementById('alunos_acimaDaMedia');

async function carregaAlunos() {
    try {
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
        } else {
            console.error('Erro ao carregar alunos. Status:', resposta.status);
        }
    } catch (error) {
        console.error('Erro de rede ao carregar alunos:', error);
    }

    try {
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
        } else {
            console.error('Erro ao carregar alunos infrequentes. Status:', alunosInfrequentes.status);
        }
    } catch (error) {
        console.error('Erro de rede ao carregar alunos infrequentes:', error);
    }

    try {
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
        } else {
            console.error('Erro ao carregar alunos acima da média. Status:', alunosAcimaDaMedia.status);
        }
    } catch (error) {
        console.error('Erro de rede ao carregar alunos acima da média:', error);
    }

}

carregaAlunos();

const listaDeMedias = document.getElementById('lista_medias');
const mediaDaTurma = document.getElementById('media_turma')

async function carregaMedias() {
    try {
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
        } else {
            console.error('Erro ao carregar médias. Status:', medias.status);
        }
    } catch (error) {
        console.error('Erro de rede ao carregar médias:', error);
    }

    mediaDaTurma.innerHTML = '';

    try {
        const response = await fetch(apiMediaGeral);
        if (response.ok) {
            const data = await response.json();
            document.getElementById("media_turma").innerHTML = `
            <h1>Média Geral da Turma: ${data}</h1>
            `;
        } else {
            console.error('Erro ao carregar média geral. Status:', response.status);
        }
    } catch (error) {
        console.error('Erro de rede ao carregar média geral:', error);
    }

}

carregaMedias();
