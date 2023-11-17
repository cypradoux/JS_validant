export function exo2() {
let result = 1
for(let number = prompt("De quel nombre veux-tu calculer la factorielle ?"); number >0; number --) {
    result *= number;
console.log(`Le résultat est ${result}`)
}
}