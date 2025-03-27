import styled from 'styled-components'

import StyleVariables from '../../styles/StyleVariables'
import * as enums from './tarefa'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'status') {
    if (props.status === enums.Status.PENDENTE) return StyleVariables.c04
    if (props.status === enums.Status.CONCLUIDA) return StyleVariables.c02
  } else {
    if (props.prioridade === enums.Prioridade.URGENTE) return StyleVariables.c01
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return StyleVariables.c04
  }
  return '#ccc'
}

export const Card = styled.div`
  padding: 16px;
  margin-bottom: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #fcfcfc;
  border-radius: 16px;
`
export const Titulo = styled.h3`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
`
export const Tag = styled.span<TagProps>`
  display: inline-block;
  border-radius: 8px;
  margin-right: 16px;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => retornaCorDeFundo(props)};
`
export const Descricao = styled.textarea`
  width: 100%;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
  line-height: 24px;
  font-size: 14px;
  resize: none;
  border: none;
  background-color: transparent;
  font-family: 'Roboto Mono', monospace;
  color: #8b8b8b;
`
export const BarraAcoes = styled.div`
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`
export const Botao = styled.button`
  padding: 8px 12px;
  margin-right: 8px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  color: #fff;
  background-color: #2f3640;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${StyleVariables.c02};
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${StyleVariables.c01};
`
