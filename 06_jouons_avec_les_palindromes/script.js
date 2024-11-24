function maxDaysInMonth(month,year){
    /*if (month === 02){
        return 28
    }
    else if(month === 04 || month === 06 || month === 09 || month === 11){
        return 30
    }
    else {
        return 31
    }
    //Cette fonction me renvoie ce que je lui demande et je vais utiliser celle-ci pour le moment
    //mais j'ai également vu qu'il existait une fonction Date(year,month,0).getDate qui peut fonctionner et qui prend en compte les années bissextiles    
        */
    return new Date(year, month, 0).getDate()
}
//console.log(maxDaysInMonth(07,2023))

function isValidDate(date){
    const onlyNumbers = date.split('/')
    //console.log("avant num ", onlyNumbers)
    const day = Number(onlyNumbers[0])
    const month = Number(onlyNumbers[1])
    const year = Number(onlyNumbers[2])
    // console.log("jour " + day)
    // console.log("mois " + month)
    // console.log("année " + year)

    const maxDays = maxDaysInMonth(month,year)

    if (day <= maxDays && month >= 1 && month <=12 && year > 999 && year <= 9999){
        //console.log("true") 
        return true
    }
    else{
        //console.log("false")
        return false
    }
}

const test = "kayak" 
//isValidDate(dateTest)

function isPalindrome(string){
    const lowerString = string.toLowerCase()
    const splitString = lowerString.split('')
    const reversedString = splitString.reverse().join('') //on inverse le tableau puis on rassemble les éléments à nouveau
    //console.log(reversedString)

    if (lowerString === reversedString){
        console.log("C'est un palindrome")
        return true
    }
    else {
        console.log("Ce n'est pas un palindrome")
        return false
    }
}


//isPalindrome(test)

function getNextPalindromes(x){
    let array = []

    const oneDay = 24*60*60*1000 // Un jour en millisecondes, qu'on veut rajouter à notre date du jour
    const todayDate = new Date() //date du jour
    //console.log(todayDate)
    let dateCheck = todayDate //date qui va s'actualiser et être vérifiée par la fonction de palindromes
    //console.log(dateCheck)
    //console.log(dateCheck.toLocaleDateString("fr-FR"))
    const dateToString = (date) =>{ return date.toLocaleDateString('fr-FR')} //permet de mettre la date au format français

    while(array.length < x) { //je pense que je n'ai pas besoin de mettre -1 si je ne mets pas <= x
       if(isPalindrome(dateToString(dateCheck))){ //si la date à vérifier est un palindrome
        array.push(dateToString(dateCheck)); //alors on l'ajoute au tableau
       }
       dateCheck = new Date(dateCheck.getTime()+ oneDay) //on rajoute un jour
    }
    console.log(array)
}
//getNextPalindromes(5)

function isDatePalindrome(date){
    if (isValidDate(date)){
        const onlyNumbers = date.split('/') //on récupère les chiffres sans les /
        //console.log(onlyNumbers)
        //console.log(date.replaceAll('/', ''))
        const numberString = onlyNumbers.join(''); //on rassemble les trois élements en un seul
        //console.log(numberString)
        
        /*  //premiers essais
    //const reversedNumbers = onlyNumbers.reverse() //Ne fonctionne pas, il semblerait qu'on ne puisse inverser qu'un tableau de valeurs
    
    const reversedNumbers = onlyNumbers.reverse().join('') //dans ce cas on inverse le tableau puis on rassemble les éléments
    console.log(reversedNumbers) //ça inverse les éléments du tableaux mais pas les chiffres car 2023 reste 2023 dans mon test */

      isPalindrome(numberString)  
}
    else {
        console.log("La date n'est pas valide " + date)
    
}
}

//let testString = "radar"
//let testString = "21/02/2012"
//let testString = "30/02/2021"
let testString = "Radar"

let dateParts = testString.split('/') //on sépare au niveau des / s'il y en a dans la chaîne à tester
let date = new Date(+dateParts[2], dateParts[1]-1) // le format est MM/DD/YYYY donc on récupère la deuxième valeur qu'on met en premier pour les jours et la première en deuxième
//pour les mois. On enlève 1 car les mois commencent à 0


//On teste, si l'objet Date() renvoie une date invalide on utilise la fonction isPalindrome car ce n'est pas une date sinon on utilise la fonction isDatePalindrome car la date est valide
if (date.toString() === "Invalid Date"){
    isPalindrome(testString)
}
else {
    isDatePalindrome(testString)
}