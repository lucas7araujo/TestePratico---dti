const express = require('express')
const router = express.Router();
const alunosController = require('../controllers/alunosController');

router.get('/alunos', alunosController.getAlunos);
router.get('/alunos', alunosController.getMedias);

router.post('/alunos', alunosController.postAluno);


module.exports = router
