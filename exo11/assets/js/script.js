let message = "Ce message apparaît après 2 seconde"
let delay = 2000
let retarder = (message, delay) => setTimeout(() => console.log(message), delay)

retarder(message, delay) //NE PAS OUBLIER DE LANCER LE PROGRAMME COMME UN GROS DEBILE