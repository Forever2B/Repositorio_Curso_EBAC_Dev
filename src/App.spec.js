import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Testes do componente principal', () => {
  test('Renderizando?', () => {
    render(<App />)
    expect(screen.getByText('cadastrar')).toBeInTheDocument()
  })

  test('Adicionar na lista: "Estudar Tailwind"', () => {
    render(<App />)
    fireEvent.change(screen.getByTestId('campo-add'),{target: {value: 'Estudar Tailwind'}})
    fireEvent.click(screen.getByTestId('btn-cadastrar'))

    expect(screen.getByText('Estudar Tailwind')).toBeInTheDocument()
  })
})