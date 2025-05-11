alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numerosecreto = parseInt(Math.random() * numeroMaximo +1);
console.log(numerosecreto);
let chute;
let tentativas = 1;

// se chute for igual ao numero secreto 
while (chute != numerosecreto) {
    chute = prompt(`Escolha um numero entre 1 a ${numeroMaximo}`);
    // se chute for igual ao numero secreto
    if (chute == numerosecreto) {
        break;
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
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai, você descobriu o numero secreto ${numerosecreto} com ${tentativas} ${palavraTentativa} `);
