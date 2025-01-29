//Deuxième itération de cet exercice

const GUESS = document.getElementById('guess')
const GUESS_BAR = document.getElementById('guess-bar')
const VALID_BTN = document.getElementById('valid-btn')
const MESSAGE = document.getElementById('message')

let userTries = 0

function userNumber(){
    let givenNumber = GUESS_BAR.value
    return givenNumber
}


function didIWin(userGuess, numToGuess){
    if(userGuess < numToGuess){
        MESSAGE.innerText='Le nombre à deviner est plus grand'
        return false
    }
    else if (userGuess > numToGuess){
        MESSAGE.innerText='Le nombre à deviner est plus petit'
        return false
    }
    else {
        MESSAGE.innerText='Bravo! Vous avez trouvé le bon nombre'
        return true
    }
}

function numberToGuess(){
    let givenGuess = prompt('Choisissez un nombre à faire deviner')
    
    while (true){
        if(givenGuess > 0 && givenGuess < 50){
            break;
        }
        givenGuess = prompt('Choisissez un nombre entre 0 et 50 à faire deviner')
    }
    return givenGuess
}

function gamePlay(numToGuess){
    let givenNumber = userNumber()
    let isWon = didIWin(givenNumber, numToGuess)
    
    while (!isWon){
        givenNumber = userNumber()
        isWon = didIWin(givenNumber, numToGuess)
    }
}
let rightAnswer = numberToGuess()

VALID_BTN.addEventListener('click', gamePlay(rightAnswer))