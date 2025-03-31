import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// REDUCESR - STORE - MODELS - ENUMS
import { remover, editar } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
// ESTILOS
import * as S from './styles'
import { Botao, BotaoSalvar } from '../../styles'

type Props = TarefaClass

const Tarefa = ({
  email: emailOriginal,
  celular: celularOriginal,
  nome,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [celular, setCelular] = useState('')

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (celularOriginal.length > 0) {
      setCelular(celularOriginal)
    }
  }, [emailOriginal, celularOriginal])

  function CancelaEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setCelular(celularOriginal)
  }
  function SalvaEdicao() {
    setEstaEditando(false)
    dispatch(
      editar({
        email: email,
        celular: celular,
        nome,
        id
      })
    )
  }
  return (
    <S.Card>
      <S.Titulo>
        {estaEditando && <em>Editando contato: </em>}
        {nome}
      </S.Titulo>
      <S.Descricao
        disabled={!estaEditando}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.Descricao
        disabled={!estaEditando}
        value={celular}
        onChange={(e) => setCelular(e.target.value)}
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
