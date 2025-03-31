import Tarefa from '../../components/Tarefa'
import Buscar from '../../containers/buscar'

import { useSelector } from 'react-redux'
import { RootReducerType } from '../../store/index'
import * as S from '../../styles'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducerType) => state.tarefas)
  const { termo } = useSelector((state: RootReducerType) => state.filtro)

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      return tarefasFiltradas
    } else {
      return itens
    }
  }
  const tarefasRecuperadas = filtraTarefas()

  return (
    <S.ContainerExtra>
      <Buscar />
      <S.MainContainer>
        <S.Titulo as="p">
          {termo !== undefined && termo.trim() !== '' && (
            <>
              {tarefasRecuperadas.length} Contatos marcados como: &quot;{termo}
              &quot;
            </>
          )}
        </S.Titulo>
        <ul>
          {tarefasRecuperadas.map((t) => (
            <li key={t.id}>
              <Tarefa
                id={t.id}
                nome={t.nome}
                email={t.email}
                celular={t.celular}
              />
            </li>
          ))}
        </ul>
      </S.MainContainer>
    </S.ContainerExtra>
  )
}

export default ListaDeTarefas
