function tocaSom (seletorAudio) {
    elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        
        elemento.play();
        
    } else {

        console.log('Elemento não encotrado ou seletor inválido!');

    };
};

const listaDeTeclas = document.querySelectorAll('.tecla');

// Para

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;  //template string

    tecla.onclick = () => {
        tocaSom(idAudio);
    };
    tecla.onkeydown = function (evento) {
        
        if (evento.code === 'Space' || evento.code ==='Enter') {
            tecla.classList.add('ativa');
        };
    };
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    };
};
