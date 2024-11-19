const playerInput = document.querySelector('#player1')
const takeOutBtn = document.querySelector('#validBtn')
const matchesLeft = document.querySelector('#matchesLeft')

let totalMatches = 50

//displays the number of matches at the beginning of the game
matchesLeft.innerHTML = `Matches left : <br/> ${totalMatches}`

//choosing the number of matches to take out
function getNumber(){
  let playerChoice = Number(playerInput.value)

  if (playerChoice >= 1 && playerChoice <= 6 && playerChoice <= totalMatches){
      
    playerInput.value ='' //clears the input
    console.log("playerChoice : " + playerChoice)
    return playerChoice
    }
  else {
    alert("Please choose a number between 1 and 6")
    playerInput.value = ''
    return playerChoice = ""
      
    }
}

//function taking out the number of matches selected by the player
function takeMatches(matchesNumber){
  totalMatches = totalMatches - matchesNumber
  
}

//validation of the number written in the input
function validation() {
  const playerNumber = getNumber()

  console.log(playerNumber)

  takeMatches(playerNumber)
  

  console.log("playerNumber : " + playerNumber);
  console.log("totalMatches : " + totalMatches);

  matchesLeft.innerHTML = `Matches left : <br/> ${totalMatches}`

  if (totalMatches === 0){
    console.log("Le jeu est fini")
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

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
//player1 = player2 dans une fonction à part avec même condition que getNumber