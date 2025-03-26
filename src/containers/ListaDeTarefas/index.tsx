import Tarefa from '../../components/FiltroCard/Tarefa'
import { Container } from './styles'

import * as enums from '../../components/FiltroCard/Tarefa/tarefa'

const tarefas = [
  {
    titulo: 'sei lá',
    descricao: 'sei mei sei lá mas bem sei la porque sei la sei la',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'titulo foda',
    descricao: 'pipipi popopo',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: '03',
    descricao: 'tic tac teco',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            titulo={t.prioridade}
            descricao={t.descricao}
            prioridade={t.prioridade}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
