// Based Numbers

let num = 888;
let binario = '';

// Binário com convertToBinary

bin = num.toString(2);
console.log(bin);

// Binário com for
for (let i = num; i > 0; i = Math.floor(i / 2)) {
  binario = (i % 2) + binario;
    
}

console.log(binario);
