let numeros = [3, 36, 40, 58, 62]
let soma = 0

for (let numero of numeros) {
    soma = soma + numero
}

document.write(`a. Array números: [${numeros}]<br>`)
document.write(`b. a soma deles é: ${soma}`)