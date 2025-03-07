// Lucky Number

const NumeroDaSorte = 8;
let palpite = Math.floor(Math.random() * 10) + 1;

while (palpite !== NumeroDaSorte) {
    console.log(`Palpite: ${palpite}`);
    console.log('Esse não é o número da sorte');
    palpite = Math.floor(Math.random() * 10) + 1;
}
console.log(`Palpite: ${palpite}`);
console.log('Parabéns, você acertou!');
