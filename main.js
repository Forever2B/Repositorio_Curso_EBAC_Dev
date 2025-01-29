const form = document.getElementById('form-contatos');
const contatos = [];
const numeros = [];

let linhas = '<tr>';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionaLinha();
    atualizatabela();
})



function adicionaLinha() {
    const inputNome = document.getElementById('nome-contato');
    const inputcontatos = document.getElementById('numero-contato');

    contatos.push(inputNome.value);
    numeros.push(parseFloat(inputcontatos.value));

    let linha = "<tr>";
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputcontatos.value}</td>`;
    linha += "</tr>";

    linhas += linha


    inputNome.value = '';
    inputcontatos.value = '';
}


function atualizatabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}