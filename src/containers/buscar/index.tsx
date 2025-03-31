import { useDispatch, useSelector } from 'react-redux'
// REDUCES
import { RootReducerType } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
// ESTILOS
import { Campo2 } from '../../styles'
import { H1Custom } from './styles'

const Buscar = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducerType) => state.filtro)

  return (
    <>
      <H1Custom> Lista De Contatos </H1Custom>
      <Campo2
        type="text"
        placeholder="Buscar nome"
        value={termo}
        onChange={(e) => dispatch(alterarTermo(e.target.value))}
      />
    </>
  )
}

export default Buscar
