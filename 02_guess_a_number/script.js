function userNumber (){
    let userChoice =  Number(prompt("Entrez un chiffre")) //transformation de la chaine de caractère en variable number
    return userChoice
 }

let givenNumber = userNumber()
 
console.log(givenNumber)

function didIWin(userGuess){
    userGuess = userNumber()
    if (userGuess === 22){
        alert("Bravo! Vous avez deviné le nombre.")
        return true
    }
    else if (userGuess<22){
        alert("Le nombre à trouver est plus grand")
        return false
    }
    else if (userGuess>22){
        alert("Le nombre à trouver est plus petit")
        return false
    }
 }


const gamePlay = () => {
    userNumber()
    didIWin(givenNumber)
    if (didIWin(givenNumber)==true){
        alert("Bravo! Vous avez deviné le nombre.")
    }
    else {
        userNumber()
        didIWin(givenNumber)
    }
 }

 gamePlay()

 