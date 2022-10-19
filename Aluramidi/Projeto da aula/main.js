// Função que toca o som selecionado

function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
};

function tocaSomClap () {
    document.querySelector('#som_tecla_clap').play();
};

// Devemos retirar os parênteses da função para que ela na toque imediatamente

document.querySelector('.tecla_pom').onclick = tocaSomPom;