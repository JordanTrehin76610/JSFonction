// function saluerNom(nom) {
//     console.log(`Bonjour, ${nom}`)
// }

// saluerNom('Carotin')
// saluerNom('Brigitte')
// saluerNom('Paul')
// saluerNom(prompt("Rentre un prénom"))

// function additionner(a, b) {
//     somme = a + b
//     return somme
// }

// additionner(+prompt("Donner un premier chiffre"), +prompt("Donner un second chiffre"))
// console.log(somme)


let saluerNom = nom => `Bonjour, ${nom}`
let nom = prompt("Donnez votre nom")

let additionner = (a, b) => a + b
let a = +prompt("Donner 1er nombre")
let b = +prompt("Donner 2nd nombre")

console.log(saluerNom(nom))
console.log(additionner(a, b))