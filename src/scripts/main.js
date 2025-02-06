document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('result').addEventListener('submit', function(evento) {
        evento.preventDefault();
        
        let maxnumber = parseInt(document.getElementById('maxnumber').value);

        let numeroAle = Math.random() * maxnumber;
        numeroAle = Math.floor(numeroAle + 1);


        document.getElementById('resultvalor').innerText = numeroAle;
        document.querySelector('.resultado').style.display = 'block';
    })
})