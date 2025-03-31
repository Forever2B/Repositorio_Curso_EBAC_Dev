import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// REDUCESR - STORE - MODELS - ENUMS
import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import * as enums from './tarefa'
// ESTILOS
import * as S from './styles'
import { Botao, BotaoSalvar } from '../../styles'

type Props = TarefaClass

const Tarefa = ({
  descricao: descricaoOriginal,
  prioridade,
  estado,
  titulo,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setdescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setdescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function CancelaEdicao() {
    setEstaEditando(false)
    setdescricao(descricaoOriginal)
  }
  function SalvaEdicao() {
    setEstaEditando(false)
    dispatch(
      editar({
        descricao: descricao,
        prioridade,
        estado,
        titulo,
        id
      })
    )
  }
  function alterarStatusTarefa(e: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alteraStatus({
        id,
        finalizado: e.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={estado === enums.Status.CONCLUIDA}
          onChange={alterarStatusTarefa}
        />
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={estado}>
        {estado}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(e) => setdescricao(e.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar onClick={SalvaEdicao}>Salvar</BotaoSalvar>
            <S.BotaoCancelarRemover onClick={CancelaEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
export default Tarefa
