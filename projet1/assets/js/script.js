let tableau = []

function ajouterTache(description) {
    tableau.push(description)
    return tableau
}

function supprimerTache(id) {
    tableau.splice((id - 1), 1)
    return tableau
}

function afficherTaches() {
    for (let i = 0; i < tableau.length; i++) {
        console.log(`Tâche n°${i + 1}: ${tableau[i]}`)
    }
    console.log("FIN AFFICHAGE TACHE")
}

ajouterTache(prompt("Ajouter une tâche"))
afficherTaches()
ajouterTache(prompt("Ajouter une tâche"))
afficherTaches()
ajouterTache(prompt("Ajouter une tâche"))
afficherTaches()
supprimerTache(+prompt(`Donner votre tâche à supprimer de 1 à ${tableau.length}`))
afficherTaches()
supprimerTache(+prompt(`Donner votre tâche à supprimer de 1 à ${tableau.length}`))
afficherTaches()