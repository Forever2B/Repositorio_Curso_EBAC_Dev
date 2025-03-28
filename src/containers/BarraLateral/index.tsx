import { useDispatch, useSelector } from 'react-redux'
// REDUCES
import { RootReducerType } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
// COMPONENTES
import FiltroCard from '../../components/FiltroCard'
import * as enums from '../../components/Tarefa/tarefa'
// ESTILOS
import * as S from './styles'
import { Campo } from '../../styles'

const Barralateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducerType) => state.filtro)

  return (
    <S.Aside>
      <div>
        <Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(e) => dispatch(alterarTermo(e.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            valor={enums.Status.PENDENTE}
            criterio="status"
            legenda="Pendentes"
          />
          <FiltroCard
            valor={enums.Status.CONCLUIDA}
            criterio="status"
            legenda="Concluidas"
          />
          <FiltroCard
            valor={enums.Prioridade.URGENTE}
            criterio="prioridade"
            legenda="Urgentes"
          />
          <FiltroCard
            valor={enums.Prioridade.IMPORTANTE}
            criterio="prioridade"
            legenda="Importantes"
          />
          <FiltroCard
            valor={enums.Prioridade.NORMAL}
            criterio="prioridade"
            legenda="Normal"
          />
          <FiltroCard criterio="todas" legenda="Todas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default Barralateral
