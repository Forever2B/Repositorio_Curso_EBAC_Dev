function somar () {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
       soma += arguments[i];
     };

  return soma;
}
console.log(somar(5,5,5));
console.log('--------------------------------------------------');

function somarRest(...numeros) {
    return numeros.reduce((soma, num) => soma + num, 0);
}
console.log(somarRest(5,5,5));
console.log('--------------------------------------------------');

const numeros = [1,2,3,4,5,6,7,8,9,10];

console.log(...numeros);
console.log('--------------------------------------------------');

const nomesFemininos = ['Melissa', 'Isadora', 'Maria', 'Rebeca'];
const nomesMasculinos = ['Gabriel', 'Rodrigo', 'Marcelo', 'Pedro'];

const nomes = [...nomesFemininos, ...nomesMasculinos];
console.log(nomes);