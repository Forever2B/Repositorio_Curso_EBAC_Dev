import BotaoAdicionar from '../../components/BotaoAdicionar'
import Barralateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const HomePage = () => (
  <>
    <Barralateral />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default HomePage
