function tryWord(word, base) {
	// TODO: fix jeu sensible à la casse.
	// if (word === base) {
	// 	return true
  // } else {
  	let wellPlaced = [];
    let notInWord = [];
    let missplaced = [];
    
    let lowerWord = word.toLowerCase();
  	let arrayBase = base.split('');
    let arrayWord = lowerWord.split('');
    console.log("array word :" + arrayWord)
    
    for (const char of arrayWord) {
      if (arrayBase.includes(char) === false) {
        notInWord.push(char)
      }
    }

		for (let i = 0; i < arrayBase.length-1; i++) {
    	if (arrayBase[i] === arrayWord[i]) {
      	wellPlaced.push(arrayWord[i]);
      }	else {
        missplaced.push(arrayWord[i])
      }
    }
    
    
    return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }
  }


function guess() {

  document.getElementById("well").innerText = '' // pour vider les div, au moment où on trouve la bonne réponse par exemple
  document.getElementById("miss").innerText = ''
  document.getElementById("not").innerText = ''

	let base = 'dictionnaire'
	let word = document.getElementById("word").value
	let result = tryWord(word, base)
  if (word.toLowerCase() === base) {
    document.getElementById("try").innerText = word
    document.getElementById("win").innerText = 'Vous avez gagné'
    console.log("gagné")
  } else {
  document.getElementById("word").value = ''
 	document.getElementById("try").innerText = word
  document.getElementById("well").innerText = 'Bien placé: '+ result.wellPlaced.join(', ')
  document.getElementById("miss").innerText = 'Mal placé: '+ result.missplaced.join(', ')
  document.getElementById("not").innerText = 'Pas dans le mot: '+ result.notInWord.join(', ')
  console.log(word)
}
}

//ETAPE 1
//J'ai lié le script au html
/* La majorité du code fonctionne, on peut entrer un mot et le valider. 
La fonction nous renvoie bien le mot qu'on a écrit, les lettres qui sont bien placées et celles qui ne le sont pas. 
En revanche il y a beaucoup trop de virgules dans les lettres mal placées 
et des lettres se répètent entre celles mal placées et celles qui ne sont pas dans le mot. 
De plus, il n'y a pas de phrase qui s'affiche en cas de bonne réponse*/