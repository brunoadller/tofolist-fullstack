import React, { useState } from 'react'
import './style.css'

const formValues = {
  tarefa: "",
  descricao:"",
  responsavel:""
}
const Form = () => {
  const [values, setValues] = useState(formValues)

  const getValues = (event) => {
    const {name, value} = event.target
    setValues({...values,[name]:value})
  }
  const handleClickSendTask = (event) => {
    event.preventDefault() 
    console.log(values)
    fetch('http://localhost:4000/novaTarefa', {
      method: 'POST',
      headers:{
        'Content-Type': 'appication/json'
      },
      body: JSON.stringify(values),

    })
    .then(response => {
      if(!response.okj){
        throw new Error('Erro de rede')
      }
      return response.json()
    })
    .then(data => {
      console.log('Dados enviados com sucesso ', data)
    })
  }
  return (
    <div className='form-container'>
        <div className='inputs-container'>
            <input 
              name="tarefa"
              value={values.tarefa}
              onChange={getValues}
            placeholder="Qual a tarefa"/>
            <input 
            name="descricao"
            value={values.descricao}
              onChange={getValues}
            placeholder="Descricao"/>
            <input 
            name="responsavel"
            value={values.responsavel}
              onChange={getValues}
            placeholder="Responsável"/>
           <button onClick={handleClickSendTask}>
              Enviar tarefa
           </button>

        </div>
    </div>
  )
}

export default Form
