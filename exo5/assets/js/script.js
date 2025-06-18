function calculerPrixTotal(prixHT, tauxTVA) {
    if (isNaN(tauxTVA)) {
        tauxTVA = 0.20
    }
    prixTTC = prixHT + (prixHT * tauxTVA)
    return prixTTC
}

calculerPrixTotal(+prompt("Donner un prix sans les taxes"), +prompt("Donner le taux de la TVA"))
console.log(`Voici le prix TTC avec TVA spécifier: ${prixTTC}€`)
calculerPrixTotal(+prompt("Donner un prix sans les taxes"))
console.log(`Voici le prix TTC sans TVA spécifier: ${prixTTC}€`)