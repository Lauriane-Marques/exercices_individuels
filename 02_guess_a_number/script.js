function userNumber (){
    let userChoice =  Number(prompt("Entrez un chiffre")) //transformation de la chaine de caractère en variable number
    return userChoice
 }

let givenNumber = userNumber()
 
console.log(givenNumber)

function didIWin(userGuess){
    userGuess = userNumber()
    if (userGuess<22){
        alert("Plus grand")
    }
    else if (userGuess>22) {
        alert("Plus petit")
    }
    else {
        alert("Bravo! Vous avez deviné le nombre.")
    }
 }


const gamePlay = () => {
    userNumber()
    didIWin(givenNumber)
 }

 // Cette partie fonctionne mais le prompt s'affiche 3 fois avant de me donner ma réponse (mais la réponse est correcte)