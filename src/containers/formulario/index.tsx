import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { cadastrar } from '../../store/reducers/tarefas'

import {
  BotaoSalvar,
  Campo,
  ContainerExtra,
  MainContainer2,
  Titulo
} from '../../styles'
import { Form } from './styles'
import { BotaoReturn } from '../buscar/styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [celular, setCelular] = useState('')

  const navigate = useNavigate()

  const cadastrarTarefa = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      cadastrar({
        nome,
        email,
        celular
      })
    )
    navigate('/')
  }

  return (
    <ContainerExtra>
      <MainContainer2>
        <Titulo>Novo Contato</Titulo>
        <Form onSubmit={cadastrarTarefa}>
          <Campo
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            type="text"
            placeholder="Nome do contato"
            required
          />
          <Campo
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="email"
            placeholder="E-mail"
            required
          />
          <Campo
            value={celular}
            onChange={({ target }) => setCelular(target.value)}
            type="number"
            placeholder="Numero De Celular"
            required
          />
          <BotaoSalvar type="submit">Salvar Contato</BotaoSalvar>
        </Form>
        <BotaoReturn to="/">Voltar para os contatos</BotaoReturn>
      </MainContainer2>
    </ContainerExtra>
  )
}

export default Formulario
