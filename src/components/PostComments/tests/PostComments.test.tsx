import { fireEvent, render, screen } from "@testing-library/react"

import PostComment from "../"

describe('Testes do componente PostComment', () => {



    test('inseriu e renderizou os dois comentários corretamente?', () => {
        render(<PostComment/>);

        const textarea = screen.getByTestId("text-area-comments")
        const botao = screen.getByTestId("btn-comments")

        fireEvent.change(textarea, { target: { value: "Primeiro comentário" } })
        fireEvent.click(botao)
        fireEvent.change(textarea, { target: { value: "Segundo comentário" } })
        fireEvent.click(botao)


        const comentarios = screen.getAllByTestId('P-comments') 

        expect(comentarios).toHaveLength(2)
        
        comentarios.forEach((comentario) => {
          expect(comentario).toBeInTheDocument()
        })
    })
})