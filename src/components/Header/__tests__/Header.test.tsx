import { screen } from '@testing-library/react'

import Header from '..'

import { renderizarComProvider } from '../../../utils/tests'

describe('Testes par ao componente Header', () => {
  test('Deve renderizar corretamente', () => {
    renderizarComProvider(<Header />)

    expect(screen.getByText('EBAC Games')).toBeInTheDocument
  })
  test('Deve renderizar 2 itens no carrinho', () => {
    renderizarComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['windows'],
              preco: 150.9,
              precoAntigo: 199.9,
              titulo: 'Elden Ring'
            },
            {
              id: 2,
              categoria: 'Plataforma',
              imagem: '',
              plataformas: ['windows'],
              preco: 25.0,
              precoAntigo: 50.0,
              titulo: 'Ender Lilies'
            }
          ]
        }
      }
    })

    expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
  })
})
