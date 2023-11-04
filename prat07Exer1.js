const nomes = ["Pablo", "Sheila", "Mariana", "Sueli"]
let index = 0

for (let i = 0; i < nomes.length; i++) {
    let nome = nomes[i];
    index++
    document.write(`${index}. ${nome}<br>`)
}