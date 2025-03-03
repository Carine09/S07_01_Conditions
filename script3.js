/* Exercice 3 : Ecris avec des mots ce que fais le code puis lis ta phrase à un encadrant :

    int tmp = 15; 

    if (tmp < 0)   
        printf("Freezing weather.");
    else if (tmp < 10)  
        printf("Very cold weather.");
    else if (tmp < 20)  
        printf("Cold weather.");   .
    else if (tmp < 30)  
        printf("Normal in temp."); 
    else if (tmp < 40)   
        printf("Its Hot."); 
    else  
        printf("Its very hot.");
Ré-écris ce code en javascript en utilisant des IF/ELSE etc. Puis en utilisant un switch case. */

let tmp = 31;

function whatIsWeather(tmp) {
    if (tmp < 0) {
        console.log("Freezing weather.")
    }
    else if (tmp < 10) {
        console.log("Very cold weather.")
    }
    else if (tmp < 20) {
        console.log("Cold weather.")
    }
    else if (tmp < 30) {
        console.log("Normal in temp.")
    }
    else if (tmp < 40) {
        console.log("Its Hot.")
    }
    else {
        console.log("Its very hot.")
    }
}

whatIsWeather(tmp);

switch (true) {
    case tmp < 0:
      console.log("Freezing weather.");
      break;
    case tmp < 10:
      console.log("Very cold weather.");
      break;
    case tmp < 20:
      console.log("Cold weather.");
      break;
    case tmp < 30:
      console.log("Normal in temp.");
      break;
    case tmp < 40:
      console.log("Its Hot.");
      break;
    case tmp > 40:
        console.log("Its very hot.");
        break;
    default:
      console.log("default");
  }