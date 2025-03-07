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
    $('#btn-searchcep').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

        $(this).find('i').addClass('d-none');
        $(this).find('span').removeClass('d-none');

        $.ajax(endpoint).done(function(answer) {
            console.log(answer);

            const logradouro = answer.logradouro;
            const bairro = answer.bairro;
            const cidade = answer.localidade;
            const estado = answer.uf;
            const address = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $('#address').val(address);

        })
        setTimeout(()=>{
            $(this).find('span').addClass('d-none');
            $(this).find('i').removeClass('d-none');
        }, 1000)
    })
})