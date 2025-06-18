function executerOperation(nombre1, nombre2, operation) {
    if (operation == "addition" || operation == "+") {
        return addition(nombre1, nombre2)
    } else if (operation == "soustraction" || operation == "-") {
        return soustraction(nombre1, nombre2)
    }

}

function addition(nombre1, nombre2) {
    return nombre1 + nombre2
}

function soustraction(nombre1, nombre2) {
    return nombre1 - nombre2
}

console.log(executerOperation(+prompt("Nombre 1:"), +prompt("Nombre 2:"), prompt("addition ou soustraction ?")))
