import React, { useEffect, useState} from 'react'
import './style.css'

const Table = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/tarefas")
        .then(data => data.json())
        .then(res => {
            setTasks(res)
        }).catch(e => {
          console.log("Erro na requisição: ", e)
        })
    },[tasks])
  return (
    <div className='table-container'>
      <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Tarefa</th>
          <th>Descricao</th>
          <th>Responsável</th>
        </tr>
      </thead>
      <tbody>
        
          {
            tasks && tasks?.map(item => {
              return(
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.tarefa}</td>
                  <td>{item.descricao}</td>
                  <td>{item.responsavel}</td>
                </tr>
              )
            })
          }
        
      </tbody>
      </table>
    </div>
  )
}

export default Table