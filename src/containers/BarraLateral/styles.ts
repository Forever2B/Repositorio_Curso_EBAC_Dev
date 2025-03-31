import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  height: 100vh;
  background-color: #eeeeee;
`
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`

export const BotaoReturn = styled(Link)`
  text-decoration: none;

  font-size: 16px;
  padding: 2px;
  border-radius: 4px;
  border: 2px solid #636e72;
  color: #fff;
  background-color: #a1a1a1;
`
