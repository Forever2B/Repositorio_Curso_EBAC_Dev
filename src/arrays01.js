const redesSociais = ['Facebook', 'Instagram', 'Twitter', 'Discord', 'Github'];

for (let i = 0; i != redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
};

console.log('--------------------------------------------------');

redesSociais.forEach(function(redeSocialNome, indice) {
    console.log(`#${indice + 1} Eu tenho perfil na rede social: ${redeSocialNome}`);
});

console.log('--------------------------------------------------');

const alunos = ['Gustavo Cavalim', 'Marcos Paulo', 'Lucas Rafael', 'Izabelly Vitória'];

const alunosJson = alunos.map(function(itemAtual) {
    itemAtual = {
        nome: itemAtual,
        curso: 'FrontEnd',
    };
    return itemAtual;
});

console.log(alunosJson);

console.log('--------------------------------------------------');

const numeros = [1, 2, 3, 4, 5,  ,7 ,8, 9, 10];
const dobroAtual = numeros.map(function(numeroAtual) {
    numeroAtual = numeroAtual * 2;
    return numeroAtual;
})

console.log(`${numeros} : ATUAL`);

console.log(`${dobroAtual} : DOBRO`);
