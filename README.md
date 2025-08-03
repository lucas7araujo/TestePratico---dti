# 📚 Desafio Prático - Estágio em Desenvolvimento | dti digital

Este projeto consiste em um sistema de gestão de sala de aula, desenvolvido como parte do processo seletivo da dti digital. 

O objetivo é permitir que o professor insira as notas e a frequência dos alunos, visualize médias por aluno, por disciplina e da turma, além de identificar alunos com desempenho acima da média ou frequência abaixo de 75%.

---

## 🚀 Instruções para executar o sistema

## Pré-requisitos
- Node.js instalado (versão 14 ou superior)

---

## 🪟 Windows | Node.js

1. Acesse o site oficial: [https://nodejs.org](https://nodejs.org)
2. Baixe o instalador da versão **LTS**.
3. Execute o instalador e siga o passo a passo (instalação padrão recomendada).
4. Após a instalação, reinicie o terminal e verifique:

```bash
node -v
npm -v
```

Se as versões forem exibidas, você já tem o Node.js e o npm instalados.
   

## Instalação e execução

1. Clone o repositório:
```bash
git clone https://github.com/lucas7araujo/TestePratico---dti.git
```
2. Vá até a pasta do projeto: 
```bash
cd .\TestePratico---dti\
```

3. Instale as dependências: 
```bash
npm init -y
```
4. Instale o express: 
```bash
npm install express
```
5. Inicie o Servidor: 
```bash
npm start
```

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

- Cadastro de alunos com 5 notas e frequência;
- Cálculo automático da média de cada aluno;
- Cálculo da média geral da turma;
- Cálculo da média por disciplina;
- Interface simples para visualização de todos esses dados.

---

## 🎯 Identificação de alunos com:

- Média acima da média da turma;
- Frequência abaixo de 75%.
  
---

## 💻 Aplicação em Funcionamento

https://github.com/user-attachments/assets/75ad1fdf-0d1e-4297-bf39-b3f9809c3c56





