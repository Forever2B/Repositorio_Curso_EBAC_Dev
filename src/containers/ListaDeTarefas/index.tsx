import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

import { useSelector } from 'react-redux'
import { RootReducerType } from '../../store/index'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducerType) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducerType) => state.filtro
  )

  const filtraTarefas = () => {
    if (termo) {
      return itens.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
    } else {
      return itens
    }
  }

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&quot; e &quot;{termo}&quot;
      </p>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
        <li>{valor}</li>
      </ul>
      <ul>
        {filtraTarefas().map((t) => (
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
    </Container>
  )
}

export default ListaDeTarefas
