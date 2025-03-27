import * as enums from '../components/Tarefa/tarefa'

class Tarefa {
  id: number
  titulo: string
  descricao: string
  prioridade: enums.Prioridade
  estado: enums.Status

  constructor(
    id: number,
    titulo: string,
    descricao: string,
    prioridade: enums.Prioridade,
    estado: enums.Status
  ) {
    this.id = id
    this.titulo = titulo
    this.descricao = descricao
    this.prioridade = prioridade
    this.estado = estado
  }
}

export default Tarefa
