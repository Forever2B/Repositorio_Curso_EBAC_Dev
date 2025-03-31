import styled, { createGlobalStyle } from 'styled-components'
import StyleVariables from './StyleVariables'

const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: roboto, sans-serif;
  list-style: none;
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export const ContainerExtra = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

export const MainContainer = styled.main`
  padding: 40px 40px 0;
  width: 50vw;
  height: 100vh;
  overflow-y: scroll;
`
export const MainContainer2 = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Titulo = styled.h2`
  margin-top: 16px;
  font-weight: bold;
  text-align: center;
  color: #5e5e5e;
  text-decoration: underline;
`

export const Campo = styled.input`
  padding: 8px;
  border-radius: 8px;
  font-weight: bold;
  background-color: #fff;
  color: #6666;
  border-color: #6666;
  width: 100%;
`
export const Campo2 = styled(Campo)`
  width: 40vw;
  margin-top: 40px;
  margin-bottom: 18px;
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

export default EstiloGlobal
