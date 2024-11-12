let matchesInit = 50

function askPlayer() {
    let playerChoice = Number(prompt("Combien d'allumettes voulez-vous retirer ?"))
    return playerChoice
}


function takeMatches(matchesNumber){
    matchesInit = matchesInit - matchesNumber
    return matchesInit
}

while (matchesInit > 0){
    let playerMatches = askPlayer()
    takeMatches(playerMatches)
    console.log(matchesInit)
}
