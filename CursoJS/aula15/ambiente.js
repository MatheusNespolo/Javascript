let num = [5, 8, 2, 9, 3]
console.log(`Vetor inicial: ${num}`)

num[5] = 6

num.push(7)

console.log(`O vetor agora tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

num.sort()
console.log(`Com a ordenação, o primeiro valor do vetor agora é ${num[0]}`)
console.log(num)
