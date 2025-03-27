import EstiloGlobal, { Container } from './styles'

import Barralateral from './containers/BarraLateral'
import ListaDeTarefas from './containers/ListaDeTarefas'
import { Provider } from 'react-redux'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Barralateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App
