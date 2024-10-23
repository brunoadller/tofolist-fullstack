const database = require('../database/connection')

class TaskController {
    novaTarefa(request, response){
        const {tarefa, descricao, responsavel} = request.body
        console.log("valores:",tarefa, descricao, responsavel) 

        database.insert({tarefa, descricao, responsavel}).table('task')
        .then(data => {
            console.log(data)
            response.json({message: 'Tarefa criada com sucesso'})
        }).catch(e => {
            console.log(e)
        })

    }

    listarTarefas(request, response){
        database.select("*").table("task").then(tarefas => {
            console.log(tarefas)
            response.json(tarefas)
        }).catch(error => {
            console.log(error)
        })
    }
}
module.exports = new TaskController()