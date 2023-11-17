export function exo3() {
let answer = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
let hashtag = "#"
let espace =" "
for(let number = 0 ; number <= answer ; number++) {
    result = espace.repeat(answer-number) + hashtag.repeat(number)
    console.log(`${result}`)
}
}