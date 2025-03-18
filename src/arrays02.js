const pessoas = ['Gustavo Cavalim', 'Marcos Paulo', 'Lucas Rafael', 'Izabelly Vitória', 'Andre Duarte', 'Arthur Dalla', 'Bruno B.'];

const pessoasJson = pessoas.map(function(itemAtual) {
    itemAtual = {
        nome: itemAtual,
        curso: 'FrontEnd',
    };
    return itemAtual;
});

console.log(pessoasJson);
console.log('--------------------------------------------------');

const mp = pessoasJson.find(function(item) {
    return item.nome == 'Marcos Paulo';
});

console.log(mp);
console.log('--------------------------------------------------');

const TodosSaoFrontEnd = pessoasJson.every(function(item) {
    return item.curso === 'FrontEnd';
})

console.log(TodosSaoFrontEnd);
console.log('--------------------------------------------------');