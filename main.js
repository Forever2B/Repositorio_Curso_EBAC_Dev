//Armazena o código da tag FORM em uam var para poder trabalhar com os elementos dela
const VarForm = document.getElementById('Formid');
// debug
console.log ("Teste")
//Event listener que ativa parte do código sempre que o usuário tenta enviar o formulário
VarForm.addEventListener('submit', function(e) {

    //previne que a página se atualize sozinha quando clicar para enviar
    e.preventDefault();

    /* Recebe as tags de Input dentro da tag Form e armazena em 2 variáveis sometne o valor por causa do ".value"
    está dentro do eventlistener porque assim vai ser atualizado os valores sempre que o usuário tentar clicar para enviar
    */
    const varNumberA = parseInt(document.getElementById('NumberA').value);
    const varNumberB = parseInt(document.getElementById('NumberB').value);
    

    //Faz a comparação de se o valor A é maior ou menor que o valor B e exibe uma resposta
    if (varNumberB > varNumberA) {
        console.log ("Maior")
        alert('O VALOR DE B É MAIOR QUE A')
    } else {
        console.log("menor")
        alert('O VALOR DE B NÃO É MAIOR QUE A')
     }
})