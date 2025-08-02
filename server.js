const express = require('express')
const app = express();
const PORT = 3000;
const path = require('path');


const alunosRoutes = require("./routes/alunosRoutes");

app.use(express.json());
app.use(alunosRoutes);
app.use(express.static(path.join(__dirname, 'public')));



app.listen(PORT, () => {
    console.log(`Servidor da Gestão de alunos rodando em localhost:${PORT}`);
});