// Based Numbers

let num = 888;
let binario = '';

// Binário
for (num; num > 0; Math.floor(num / 2)) {
    num = Math.floor(num / 2);
    if (num % 2 == 0) {
        binario += 0;
    } else {
        binario += 1;
    }
}

console.log(binario);
