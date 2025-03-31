import styled from 'styled-components'

import StyleVariables from '../../styles/StyleVariables'
import { Botao } from '../../styles'

export const Card = styled.div`
  padding: 16px;
  margin-bottom: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #fcfcfc;
  border-radius: 16px;

  label {
    display: flex;
    margin-bottom: 16px;
    align-items: center;
  }
`
export const Titulo = styled.h3`
  margin-left: 8px;
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
`
export const Tag = styled.span`
  display: inline-block;
  border-radius: 8px;
  margin-right: 16px;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: #ccc;
`
export const Descricao = styled.textarea`
  width: 100%;
  height: 38px;
  display: block;
  margin-top: 8px;
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

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${StyleVariables.c01};
`
