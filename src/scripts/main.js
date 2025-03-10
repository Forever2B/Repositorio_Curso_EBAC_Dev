// document.addEventListener('DOMContentLoaded', function(){
//     document.getElementById('btn-searchcep').addEventListener('click', function() {
//         const xhttp = new XMLHttpRequest();
//         const cep = document.getElementById('cep').value;
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`;

//         xhttp.open('GET', endpoint);
//         xhttp.send();

//         // https://viacep.com.br/ws/123123123/json
//     })
// })


$(document).ready(function() {
    $('#cep').mask('00000-000');

    $('#btn-searchcep').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

        $(this).find('i').addClass('d-none');
        $(this).find('span').removeClass('d-none');

        // ---

        fetch(endpoint).then(function(resposta){
            return resposta.json()
        })
        .then(function(json){
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;
            const address = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $('#address').val(address);
        })
        .catch(function(erro) {
            alert("ocorreu um erro ao buscar o cep!");
        })
        .finally(function() {
            setTimeout(()=>{
                $('#btn-searchcep').find('span').addClass('d-none');
                $('#btn-searchcep').find('i').removeClass('d-none');
            }, 300)
        })

        // --- AJAX -

        // $.ajax(endpoint).done(function(answer) {
        //     console.log(answer);

        //     const logradouro = answer.logradouro;
        //     const bairro = answer.bairro;
        //     const cidade = answer.localidade;
        //     const estado = answer.uf;
        //     const address = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
        //     $('#address').val(address);

        // })
        // setTimeout(()=>{
        //     $(this).find('span').addClass('d-none');
        //     $(this).find('i').removeClass('d-none');
        // }, 1000)
    })
})