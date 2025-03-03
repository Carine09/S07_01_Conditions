/*Exercice 1 : Nous voulons notifier l’utilisateur si les nombres sont positifs ou négatifs.

Ecris une condition qui affichera la nature du chiffre (positif, négatif…) dans la console.

Déclare une variable qui contiendra un nombre et teste ta condition avec les valeurs suivantes que tu donneras à la variable : 6, -8 et 0.*/


function numberType(number) {
    if (number < 0) {
        console.log(number, "est un nombre négatif")
    }
    else {
        console.log(number, "est un nombre positif")
    }
}

numberType(6);
numberType(-8);
numberType(0);