const pessoas = ['Gustavo Cavalim', 'Marcos Paulo', 'Lucas Rafael', 'Andre Duarte', 'Arthur Dalla', 'Bruno B.'];

const pessoasJson = pessoas.map(function(itemAtual) {
    itemAtual = {
        nome: itemAtual,
        idade: Math.floor(Math.random() * (27 - 18 + 1)) + 17,
    };
    return itemAtual;
});

const TodosSaoMaiorDeIdade = pessoasJson.every(function(item) {
    return item.idade >= 18;
})


console.log('--------------------------------------------------');
console.log(pessoasJson);
console.log('--------------------------------------------------');

if (TodosSaoMaiorDeIdade == true) {
    console.log('Todo mundo maior que 18, Podem gozar!');
} else {
    console.log('Não pode gozar!');
}

