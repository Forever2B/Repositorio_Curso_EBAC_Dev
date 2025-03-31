import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as enums from '../../components/Tarefa/tarefa'

import { cadastrar } from '../../store/reducers/tarefas'

import { BotaoSalvar, Campo, MainContainer, Titulo } from '../../styles'
import { Form, Options, Option } from './styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const navigate = useNavigate()

  const cadastrarTarefa = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      cadastrar({
        titulo,
        descricao,
        prioridade,
        estado: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Options>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Option key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
                onChange={(e) =>
                  setPrioridade(e.target.value as enums.Prioridade)
                }
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Option>
          ))}
        </Options>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
