(function(){

    let relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function criarHoraDosSegundos(segundos) {

        let data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false, 
            timeZone: 'UTC'
        });

    }

    function iniciaRelogio() {

        timer = setInterval(function(){

            segundos++;
            relogio.innerHTML = criarHoraDosSegundos(segundos); 

        }, 1000);

    }

    //Insering event in the document
    document.addEventListener('click', function(e){
        //Take the place that is clicked.
        let element = e.target;

        if(element.classList.contains('zerar')) {

            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
            relogio.classList.remove('pausado');
            relogio.classList.remove('iniciado');

        }

        if(element.classList.contains('iniciar')) {

            clearInterval(timer);
            iniciaRelogio();
            relogio.classList.add('iniciado');
            relogio.classList.remove('pausado');

        }

        if(element.classList.contains('pausar')) {

            clearInterval(timer);
            relogio.classList.add('pausado');

        }

    });

})();    