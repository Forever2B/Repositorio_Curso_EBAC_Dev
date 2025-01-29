$(document).ready(function() {
    $('#headerButton').click(function() {
        $('#formTarefas').slideDown();
    });
    $('#formTarefas').on('reset', function(){
        $('#formTarefas').slideUp();
    });



    $('#formTarefas').on('submit', function(e) {
        e.preventDefault();

        const ativNome = $('#AtividadeNome').val();
        const novaAtiv = $(`<li style="display: none;"></li>`);


        $(`<h3 class='LinhasAtiv'>${ativNome}</h3>`).appendTo(novaAtiv);
        novaAtiv.prependTo('ul');

        novaAtiv.fadeIn(400);
        
        $('#AtividadeNome').val('');
    });



    $('#ButtonReset').on('click', function() {
        $('ul').fadeOut(400, function() {
            $('ul').empty(); 
            $('ul').show(); 
        });
    })

    $('ul').on('click','h3', function() {
        $(this).toggleClass('LinhasAtivRiscado');
    });
})
