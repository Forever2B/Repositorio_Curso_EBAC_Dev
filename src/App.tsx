import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/home'

import store from './store/index'
import EstiloGlobal, { Container } from './styles'
import CadastroPage from './pages/cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/cadastro',
    element: <CadastroPage />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
