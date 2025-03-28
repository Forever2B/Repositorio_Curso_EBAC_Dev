import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

const BotaoAdd = styled(Link)`
  display: flex;
  position: fixed;
  right: 40px;
  bottom: 40px;
  height: 64px;
  width: 64px;
  border: solid 1px;
  border-radius: 50%;
  border-color: rgb(37, 133, 22);
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 40px;
  color: #fff;
  background-color: #44bd32;
  text-decoration: none;
`
export default BotaoAdd
