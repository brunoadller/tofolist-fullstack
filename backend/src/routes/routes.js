const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

//responsável pela criacao das tarefas
router.post('/novaTarefa', TaskController.novaTarefa)
//responsável por pegar todas as tarefas
router.get('/tarefas', TaskController.listarTarefas)
module.exports = router