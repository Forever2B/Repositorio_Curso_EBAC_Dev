const carroDaAna = {
    marca: 'foard',
    modelo: 'vw',
    motor: 1.6,
};


console.log(carroDaAna.motor);
console.log('------------------------------------');

const carroDaJulia = {
    ...carroDaAna,
    motor: 1.8,
};

console.log(carroDaJulia.motor);
console.log('------------------------------------');

const {motor: motorCarroDaAna} = carroDaAna;

console.log(motorCarroDaAna);
console.log('------------------------------------');

carroDaAna.motor = 1.8;

console.log(carroDaAna.motor);
console.log(motorCarroDaAna);
console.log(carroDaJulia.motor);