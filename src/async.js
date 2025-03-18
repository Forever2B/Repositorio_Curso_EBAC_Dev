const functionHeavyPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0
        for(let i = 0; i < 1000000000; i++) {
            execucoes++;
        }
        setTimeout(() => {resolve(execucoes+1)}, 3000);       
    } catch {
        reject('Erro ao realizar a contagem');
    }
})
async function execucaoPrincipal() {
    console.log('inicio -- 02');
    await functionHeavyPromise.then(result => console.log(`${result} Execução 02`)).catch(erro => console.log(erro));
    console.log('Fim -- 02');
}

async function execucaoHeavyAwait() {
    console.log('inicio -- 03');
    const heavypromiseAwait = await functionHeavyPromise;
    console.log(`${heavypromiseAwait} Execução 03`);
    console.log('Fim -- 03');
}

console.log('inicio -- 01');
functionHeavyPromise.then(result => console.log(`${result} Execução 01`)).catch(erro => console.log(erro));
console.log('teste antes de finalizar 1')
console.log('Fim -- 01');

console.log('-----------------------');

execucaoPrincipal()
console.log('teste antes de finalizar 2')

console.log('-----------------------');

execucaoHeavyAwait();
console.log('teste antes de finalizar 3')