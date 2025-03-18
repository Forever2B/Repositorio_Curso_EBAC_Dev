let meuMap = new Map();
meuMap.set('nome', 'Bruno');
meuMap.set('idade', '20');
meuMap.set('profissão', 'Dev');



console.log(meuMap);

console.log('------------------------------------');


for (let keys of meuMap.keys()){
    console.log(keys);
};

console.log('------------------------------------');

for (let chave of meuMap.values()){
    console.log(chave);
};

console.log('------------------------------------');

for (let chave of meuMap.entries()){
    console.log(chave);
};

console.log('------------------------------------');

for (let [chave, values] of meuMap.entries()){
    console.log(`${chave} : ${values}`);
};

console.log('------------------------------------');

meuMap.delete['nome', 'profissão'];

console.log(meuMap)

console.log('------------------------------------');

const cpf = new set()
