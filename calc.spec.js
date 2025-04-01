const calc = require('./calc')

describe('Todos os testes da calculadora', () => {
    test('Somar 3 + 2 deve retornar 5', () => {
        const ResultadoSoma = calc.soma(3,2)
        expect(ResultadoSoma).toBe(5)
    })
    
    test('Subtrair 3 - 2 deve retornar 1', () => {
        const ResultadoSubtracao = calc.subtracao(3,2)
        expect(ResultadoSubtracao).toBe(1)
    })
    
    test('Multiplicar 3 * 2 deve retornar 6', () => {
        const ResultadoMultiplicacao = calc.multiplicao(3,2)
        expect(ResultadoMultiplicacao).toBe(6)
    })
    
    test('Dividir 3 / 2 deve retornar 1.5', () => {
        const ResultadoDivisao = calc.divisao(3,2)
        expect(ResultadoDivisao).toBe(1.5)
    })
})
