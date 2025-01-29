const form = document.getElementById('form-ativ');
const imgAprovado = '<img src="./Images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./Images/reprovado.png" alt="Emoji decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima:'));

let linhas = '<tr>';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionalinha();
    atualizatabela();
    atualizarmediafinal();
})




function adicionalinha() {
    const inputNomeAtiv = document.getElementById('nome-ativ');
    const inputNotaAtiv = document.getElementById('nota-ativ');

    if (atividades.includes(inputNomeAtiv.value)) {
        alert(`A atividade: ${inputNomeAtiv.value} já foi inserida!`);
    } else {

    atividades.push(inputNomeAtiv.value);
    notas.push(parseFloat(inputNotaAtiv.value));

    let linha = "<tr>";
    linha += `<td>${inputNomeAtiv.value}</td>`;
    linha += `<td>${inputNotaAtiv.value}</td>`;
    linha += `<td>${inputNotaAtiv.value >= notaMinima ? imgAprovado : imgReprovado }</td>`;
    linha += "</tr>";

    linhas += linha
    }


    inputNomeAtiv.value = '';
    inputNotaAtiv.value = '';
}


function atualizatabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


function atualizarmediafinal(){
    const MediaFinal  = calcularMediaFinal();

    document.getElementById('media-Final-Valor').innerHTML = MediaFinal;
    document.getElementById('media-Final-Resultado').innerHTML = MediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}


function calcularMediaFinal() {
    let somaDasNotas = 0;
    
    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    };

    return somaDasNotas / notas.length;
}