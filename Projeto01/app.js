alert('Boas vindas ao jogo do número secreto');
let numerosecreto = 5;
console.log(numerosecreto)
let chute;
let tentativas = 1;

// se chute for igual ao numero secreto 
while (chute != numerosecreto) {
    chute = prompt('Escolha um numero entre 1 e 10');
    // se chute for igual ao numero secreto
    if (chute == numerosecreto) {
        alert(`Isso ai, você descobriu o numero secreto ${numerosecreto} com ${tentativas} tentativas`);

    } else {
        if (chute > numerosecreto) {
            alert(`O numero secreto é menor que ${chute}`)

        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        //tentativas = tentativas +1;
        tentativas++;
    }

}

