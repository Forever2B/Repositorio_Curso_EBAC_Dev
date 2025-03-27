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
    }
  }
})

export default tarefasSlice.reducer
export const { remover, editar } = tarefasSlice.actions
