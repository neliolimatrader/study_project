//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do numero secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    exibirTextoNaTela('h1' , 'Jogodo número secreto');
    exibirTextoNaTela('p' , 'Escolha um numero entre 1 e 10');
}
function verificarChute() {
console.log('O Botão foi clicado');

}