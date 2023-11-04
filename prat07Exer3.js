let frutas = ["Abacate", "Laranja", "Pêra"]
document.write(`a. Array criado: [${frutas}]<br>`)


frutas.push("Manga")
document.write(`b. Adicionado item ao final do array com push: [${frutas}]<br>`)


frutas.pop()
document.write(`c. Removido o último item do array com pop: [${frutas}]<br>`)


frutas.unshift("Manga")
document.write(`d. Adicionado item no início do array com unshift: [${frutas}]<br>`)


frutas.shift()
document.write(`e. Removido o item no início do array com shift: [${frutas}]<br>`)


document.write(`f. Resultado final: [${frutas}]<br>`)