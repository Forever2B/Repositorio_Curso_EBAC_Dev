import { fireEvent, screen } from '@testing-library/react'

import Produto from '..'
import { renderizarComProvider } from '../../../utils/tests'

const jogo = {
  id: 2,
  categoria: 'Plataforma',
  imagem: '',
  plataformas: ['windows'],
  preco: 25.0,
  precoAntigo: 50.0,
  titulo: 'Ender Lilies'
}

describe('Testes do componente Produto', () => {
  test('Deve renderizar corretamente', () => {
    renderizarComProvider(<Produto game={jogo} />)
    expect(screen.getByText('Ender Lilies')).toBeInTheDocument()
  })
  test('Deve Add um item ao carrinho', () => {
    const { store } = renderizarComProvider(<Produto game={jogo} />)

    const botao = screen.getByTestId('btn-add-produto')
    fireEvent.click(botao)

    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
