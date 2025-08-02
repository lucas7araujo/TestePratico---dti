const express = require('express')
const app = express();
const PORT = 3000;

const alunosRoutes = require("./routes/alunosRoutes");

app.use(express.json());
app.use(alunosRoutes);


app.listen(PORT, () => {
    console.log(`Servidor da Gestão de alunos rodando em localhost:${PORT}`);
});