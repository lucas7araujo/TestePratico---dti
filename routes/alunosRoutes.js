const express = require('express')
const router = express.Router();
const alunosController = require('../controllers/alunosController');

router.get('/alunos', alunosController.getAlunos);
router.get('/medias', alunosController.getMedias);
router.get('/infrequentes', alunosController.getInfrequentes);
router.get('/medias/mediageral', alunosController.getMediaGeral);
router.get('/alunos/acimadamedia', alunosController.getAlunosAcimaDaMedia);

router.post('/alunos', alunosController.postAluno);


module.exports = router
