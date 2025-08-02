const API = 'http://localhost:3000/alunos';

const formulario_aluno = document.getElementById('formulario_aluno');

formulario_aluno.addEventListener('submit', evento => {
    evento.preventDefault();

    const formData = new FormData(formulario_aluno);
    const data = Object.fromEntries(formData);

    fetch(API, {
        method: 'POST',
        headers: {
            'Content-type': "application/json"
        },
        body: JSON.stringify(data)
    }).then (res => res.json()). then(data => console.log(data));
})
