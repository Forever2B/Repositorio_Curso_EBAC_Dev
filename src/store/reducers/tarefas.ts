import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Tarefa from '../../models/Tarefa'
import * as enums from '../../components/Tarefa/tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Teste01',
      descricao: 'asasdadawdawdawdaw',
      prioridade: enums.Prioridade.URGENTE,
      estado: enums.Status.PENDENTE
    },
    {
      id: 2,
      titulo: 'Teste02',
      descricao: 'grgrdgrdsgrdgrsdg',
      prioridade: enums.Prioridade.NORMAL,
      estado: enums.Status.PENDENTE
    },
    {
      id: 3,
      titulo: 'Teste03',
      descricao: 'dadawdawdawd',
      prioridade: enums.Prioridade.URGENTE,
      estado: enums.Status.CONCLUIDA
    },
    {
      id: 4,
      titulo: 'Teste04',
      descricao: 'ythrthrsfadawdawdaw',
      prioridade: enums.Prioridade.IMPORTANTE,
      estado: enums.Status.CONCLUIDA
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
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
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
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const IndexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (IndexDaTarefa >= 0) {
        state.itens[IndexDaTarefa].estado = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export default tarefasSlice.reducer
export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions
