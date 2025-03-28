import Tarefa from '../../components/Tarefa'
import { useSelector } from 'react-redux'
import { RootReducerType } from '../../store/index'
import * as S from '../../styles'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducerType) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducerType) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio == 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio == 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.estado === valor
        )
      }

      return tarefasFiltradas
    } else {
      return itens
    }
  }
  const tarefasRecuperadas = filtraTarefas()

  return (
    <S.MainContainer>
      <S.Titulo as="p">
        {tarefasRecuperadas.length} Tarefas marcadas como: &quot;
        {criterio}
        {criterio !== 'todas' && `: ${valor}`}&quot;{' '}
        {termo && `contendo "${termo}"`}
      </S.Titulo>
      <ul>
        {tarefasRecuperadas.map((t) => (
          <li key={t.id}>
            <Tarefa
              id={t.id}
              titulo={t.titulo}
              descricao={t.descricao}
              prioridade={t.prioridade}
              estado={t.estado}
            />
          </li>
        ))}
      </ul>
    </S.MainContainer>
  )
}

export default ListaDeTarefas
