let messageGlobal = "Je suis global"

function afficherMessage() {
    let messageLocal = "Je suis local"
    console.log(messageGlobal)
    console.log(messageLocal)
}

// console.log(messageLocal)

// Le message d'erreur est ici car on appel une variable créer dans une fonction, elle n'est ni retourner, ni créer au dessus comme messageGlobal.
// Elle ne peut être utiliser que dans la fonction et on va tester notre théorie:

function afficherMessage() {
    let messageLocal = "Je suis local"
    console.log(messageGlobal)
    console.log(messageLocal)
}

console.log(`J'affiche la variable messageGlobal: ${messageGlobal}`)
console.log("J'appelle la fonction: ")
afficherMessage()

// Theorie confirmer !