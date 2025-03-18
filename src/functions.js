"use strict";
// TIPANDO FUNÇÕES NORMAIS
function calculaArea(base, altura) {
    return base * altura;
}
;
// TIPANDO ARROW FUNCTIONS
const calcularArea2 = (base, altura) => base * altura;
// TIPANDO FUNÇÕES QUE RECEBEM ARRAYS
function somar(...numeros) {
    return numeros.reduce((acc, num) => acc + num, 0);
}
;
