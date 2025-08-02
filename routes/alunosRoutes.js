const express = require('express')
const router = express.Router();
const alunosController = require('../controllers/alunosController');

router.get('/alunos', alunosController.getAlunos);

module.exports = router
