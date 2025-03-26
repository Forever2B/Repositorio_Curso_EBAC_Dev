import EstiloGlobal, { Container } from './styles'

import Barralateral from './containers/BarraLateral'
import ListaDeTarefas from './containers/ListaDeTarefas'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Barralateral />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
