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

const dateTest = "30/04/2011" 
//isValidDate(dateTest)

function isPalindrome(date){
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

        //deuxième essai
        const separatedNumbers = numberString.split('') //je n'arrive à séparer les chiffres qu'une fois qu'ils ont été rassemblés
        //console.log(separatedNumbers)
        const reversedNumbers = separatedNumbers.reverse().join('') //on inverse le tableau puis on rassemble les éléments à nouveau
        //console.log(reversedNumbers)

        if (numberString === reversedNumbers){
            //console.log("C'est un palindrome")
            return true
        }
        else {
            //console.log("Ce n'est pas un palindrome")
            return false
        }
    }
    else {
        console.log("La date n'est pas valide " + date)
        
    }
}

//isPalindrome(dateTest)

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
getNextPalindromes(5)