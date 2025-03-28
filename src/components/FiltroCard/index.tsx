import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../Tarefa/tarefa'
import { RootReducerType } from '../../store'

export type Props = {
  ativo?: boolean
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducerType) => state)

  const verificaEstaAtivo = () => {
    const msmCriterio = filtro.criterio === criterio
    const msmValor = filtro.valor === valor

    return msmCriterio && msmValor
  }

  const contarTarefasFiltradas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.estado === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const contadorAtivos = contarTarefasFiltradas()
  const cardAtivo = verificaEstaAtivo()

  return (
    <S.Card ativo={cardAtivo} onClick={filtrar}>
      <S.Contador>{contadorAtivos}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
