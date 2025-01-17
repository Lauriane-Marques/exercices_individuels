//Deuxième itération de cet exercice

function userNumber(){
    let givenNumber = prompt('Essayez de deviner le chiffre')
    return givenNumber
}


function didIWin(userGuess, numToGuess){
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

function gamePlay(){
    let rightAnswer = numberToGuess()
    let givenNumber = userNumber()
    let isWon = didIWin(givenNumber, rightAnswer)
    
    while (!isWon){
        givenNumber = userNumber()
        isWon = didIWin(givenNumber, rightAnswer)
    }
}

gamePlay()