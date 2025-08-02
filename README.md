# 📚 Desafio Prático - Estágio em Desenvolvimento | dti digital

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de estágio em desenvolvimento da **dti digital**.

---

## 🚀 Instruções para executar o sistema

## Pré-requisitos
- Node.js instalado (versão 14 ou superior)

## Instalação e execução

1. Clone o repositório:
```bash
git clone https://github.com/lucas7araujo/TestePratico---dti.git
````

2. 

---

## 💻 Premissas Assumidas

As notas inseridas devem estar entre 0 e 10;
A frequência é expressa em percentual (0 a 100%);
Cada aluno possui exatamente 5 disciplinas;
Os dados são armazenados em memória (sem persistência após reinício do servidor);
As médias são sempre calculadas com base nos dados atualmente inseridos.

## ⚙️ Decisões de projeto

Back-end em Node.js com Express para simplicidade e clareza;<br>
Front-end com HTML, CSS e JavaScript puro para priorizar a lógica e facilitar leitura; <br>
A aplicação é separada em camadas: controllers, routes, repositories, promovendo boa organização mesmo em projetos simples; <br>
Não foram usadas bibliotecas externas de estilização para focar na implementação da lógica central; <br>
Os dados são processados em tempo real a cada requisição — sem banco de dados ou localStorage. <br>

---

## 🧠 Funcionalidades implementadas 

Cadastro de alunos com 5 notas e frequência; <br>
Cálculo automático da média de cada aluno; <br>
Cálculo da média geral da turma; <br>
Cálculo da média por disciplina; <br>
Interface simples para visualização de todos esses dados. <br>

---
 
## Identificação de:
Alunos com média acima da média da turma; <br>
Alunos com frequência abaixo de 75%.

---

## 💻 Aplicação em Funcionamento

https://github.com/user-attachments/assets/75ad1fdf-0d1e-4297-bf39-b3f9809c3c56





