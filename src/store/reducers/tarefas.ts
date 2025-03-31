import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Tarefa from '../../models/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      nome: 'Pessoa 01',
      email: 'testeTeste@gmail.com',
      celular: '(55) 2873-9098'
    },
    {
      id: 2,
      nome: 'Pessoa 02',
      email: 'testeEmail@gmail.com',
      celular: '(55) 4444-4444'
    },
    {
      id: 3,
      nome: 'Pessoa 03',
      email: 'issoEumTeste@gmail.com',
      celular: '(55) 2843-8038'
    },
    {
      id: 4,
      nome: 'Pessoa 04',
      email: 'testeeeeee@gmail.com',
      celular: '(55) 8733-8422'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const IndexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (IndexDaTarefa >= 0) {
        state.itens[IndexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (tarefaJaExiste) {
        alert('Já existe uma tarefa com esse nome!!')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    }
  }
})

export default tarefasSlice.reducer
export const { remover, editar, cadastrar } = tarefasSlice.actions
