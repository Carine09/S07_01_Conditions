/*Exercice 1 : Nous voulons notifier l’utilisateur si les nombres sont positifs ou négatifs.

Ecris une condition qui affichera la nature du chiffre (positif, négatif…) dans la console.

Déclare une variable qui contiendra un nombre et teste ta condition avec les valeurs suivantes que tu donneras à la variable : 6, -8 et 0.*/

let number = 0;

function numberType() {
    if (number < 0) {
        console.log("Le nombre est négatif")
    }
    else {
        console.log("Le nombre est positif")
    }
}

numberType(number);