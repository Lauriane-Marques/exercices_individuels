const playerInput = document.querySelector('#player1')
const takeOutBtn = document.querySelector('#validBtn')
const matchesLeft = document.querySelector('#matchesLeft')

let totalMatches = 50

//display the number of matches at the beginning of the game
matchesLeft.innerHTML = `Matches left : <br/> ${totalMatches}`


//function taking out the number of matches selected by the player
function takeMatches(matchesNumber){
  totalMatches = totalMatches - matchesNumber
  return totalMatches
}

//validation of the number written in the input
function validation() {
    const playerChoice = Number(playerInput.value)
    if (playerChoice >= 1 && playerChoice <= 6) { //limits the number selected by the player between 1 and 6 included
        playerInput.value ='' //clears the input
        takeMatches(playerChoice)
        console.log(playerChoice);
        console.log(totalMatches)
        matchesLeft.innerHTML = `Matches left : <br/> ${totalMatches}`
        if (totalMatches < 0){
          console.log("Le jeu est fini ")
        }
        return playerChoice
    } else {
      alert("Please choose a number between 1 and 6")
    }
  
}

//enables validation through the Enter key
playerInput.addEventListener('keydown', function(evenement) {
    if (evenement.key === 'Enter') {
      validation();
    }
  });

//confirms the player's choice through the button
takeOutBtn.addEventListener('click', validation)



//Change player name
//take matches out