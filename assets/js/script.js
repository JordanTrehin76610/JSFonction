function majuscule(message) {

    message = message.toLowerCase().split('')
    message[0] = message[0].toUpperCase()
    message = message.join('')
    return alert(message)

}

// majuscule(prompt("Ecrivez un mot"))

function bienvenue(nom) {

    return alert(`Bonjour ${nom}, bienvenue à la formation DWWM`)

}

// bienvenue(prompt("Inscrivez votre nom"))







function majusculeOnClick() {

    let message = prompt("Rentre un message")
    message = message.toLowerCase().split('')
    message[0] = message[0].toUpperCase()
    message = message.join('')
    return message != '' ? alert(message) : ''

}


function bienvenueOnClick() {

    let nom = prompt("Rentre ton prénom")
    return nom != '' ? alert(`Bonjour ${nom}, bienvenue à la formation DWWM`) : ''

}


function ecritOnClick() {
    let phrase = prompt("Tu veux écrire quoi ???")
    return document.write(phrase)
}

