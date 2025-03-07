// Rock Paper Scissors

let jogador = 0;     // 0 - Pedra, 1 - Papel, 2 - Tesoura
let computador = Math.floor(Math.random() * 3);

if (jogador == 0 && computador == 0) {
    console.log('Empate');
} else if (jogador == 0 && computador == 1) {
    console.log('Computador ganhou');
} else if (jogador == 0 && computador == 2) {
    console.log('Jogador ganhou');
} else if (jogador == 1 && computador == 0) {
    console.log('Jogador ganhou');
} else if (jogador == 1 && computador == 1) {
    console.log('Empate');
} else if (jogador == 1 && computador == 2) {
    console.log('Computador ganhou');
} else if (jogador == 2 && computador == 0) {
    console.log('Computador ganhou');
} else if (jogador == 2 && computador == 1) {
    console.log('Jogador ganhou');
} else if (jogador == 2 && computador == 2) {
    console.log('Empate');
} else {
    console.log('Jogada inválida');
}