const express = require('express')
const router = express.Router();
const alunosController = require('../controllers/alunosController');

router.get('/alunos', alunosController.getAlunos);

router.post('/alunos', alunosController.postAluno);

module.exports = router
