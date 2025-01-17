//Deuxième itération de cet exercice

function userNumber(){
    let givenNumber = prompt('Essayez de deviner le chiffre')
    return givenNumber
}


function didIWin(userGuess){
    let numToGuess = 22
    if(userGuess < numToGuess){
        alert('Le nombre à deviner est plus grand')
        return false
    }
    else if (userGuess > numToGuess){
        alert('Le nombre à deviner est plus petit')
        return false
    }
    else {
        alert('Bravo! Vous avez trouvé le bon nombre')
        return true
    }
}

function gamePlay(){
        let givenNumber = userNumber()
        let isWon = didIWin(givenNumber)
    while (!isWon){
        givenNumber = userNumber()
        isWon = didIWin(givenNumber)
    }
}

gamePlay()