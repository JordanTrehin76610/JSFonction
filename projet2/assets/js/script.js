function calculer(operation, a, b) {
    if (operation == 'add' || operation == '+') {
        return add(a, b)
    } else if (operation == 'subtract' || operation == '-') {
        return subtract(a, b)
    } else if (operation == 'multiply' || operation == '*' || operation == 'x') {
        return multiply(a, b)
    } else if (operation == 'divide' || operation == '/' || operation == '%') {
        return divide(a, b)
    } else {
        alert("Erreur dans l'operation, n'est qu'accepté: add, subtract, divide, multiply")
        window.location.reload()
    }
}


function add(a, b) {
    resultat = a + b
    return resultat
}

function subtract(a, b) {
    resultat = a - b
    return resultat
}

function multiply(a, b) {
    resultat = a * b
    return resultat
}

function divide(a, b) {
    if (a == 0 || b == 0) {
        alert("Division par zéro impossible, veuillez recommencer")
        window.location.reload()
    } else {
        resultat = a / b
        return resultat
    }
}

calculer(prompt("Donner le type d'opération à effectuer (add, subtract, multiply, divide)"), +prompt("Donner votre premier nombre"), +prompt("Donner votre second nombre"))
alert(`Le résultat est de ${resultat}`)