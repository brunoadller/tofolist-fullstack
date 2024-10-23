import React, { useEffect, useState} from 'react'
import './style.css'

const Table = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
      const fetchTasks = async  () => {
        try {
          const response = await fetch("http://localhost:4000/tarefas");
          const data = await response.json();
          setTasks(data);
        } catch (e) {
          console.log("Erro na requisição: ", e);
        }
      }
    
      fetchTasks()
    },[])
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