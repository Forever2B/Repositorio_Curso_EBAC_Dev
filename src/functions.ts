// TIPANDO FUNÇÕES NORMAIS
function calculaArea(base:number, altura:number):number {
    return base * altura;
};

// TIPANDO ARROW FUNCTIONS
const calcularArea2 = (base: number, altura:number): number => base* altura;

// TIPANDO FUNÇÕES QUE RECEBEM ARRAYS
function somar(...numeros: number[]):number {

    return numeros.reduce((acc, num) => acc + num, 0);
};

