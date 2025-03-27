import * as S from './styles'
import FiltroCard from '../../components/FiltroCard'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducerType } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../components/Tarefa/tarefa'

const Barralateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducerType) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
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
            contador={1}
          />
          <FiltroCard
            valor={enums.Status.CONCLUIDA}
            criterio="status"
            legenda="Concluidas"
            contador={2}
          />
          <FiltroCard
            valor={enums.Prioridade.URGENTE}
            criterio="prioridade"
            legenda="Urgentes"
            contador={3}
          />
          <FiltroCard
            valor={enums.Prioridade.IMPORTANTE}
            criterio="prioridade"
            legenda="Importantes"
            contador={4}
          />
          <FiltroCard
            valor={enums.Prioridade.NORMAL}
            criterio="prioridade"
            legenda="Normal"
            contador={5}
          />
          <FiltroCard criterio="todas" legenda="Todas" contador={15} ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default Barralateral
