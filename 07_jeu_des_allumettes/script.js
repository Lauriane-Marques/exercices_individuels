let matchesInit = 50

function takeMatches(matchesNumber){
    let matchesRest = matchesInit - matchesNumber
    return matchesRest
}

console.log(takeMatches(4))
console.log(takeMatches(3))