function maxDaysInMonth(month){
    if (month === 02){
        return 28
    }
    else if(month === 04 || month === 06 || month === 09 || month === 11){
        return 30
    }
    else {
        return 31
    }
}
//console.log(maxDaysInMonth(07))

//Cette fonction me renvoie ce que je lui demande et je vais utiliser celle-ci pour le moment
//mais j'ai également vu qu'il existait une fonction Date(year,month,0).getDate qui peut fonctionner et qui prend en compte les années bissextiles

function isValidDate(date){
    const onlyNumbers = date.split('/')
    //console.log(onlyNumbers)

    const day = onlyNumbers[0]
    const month = onlyNumbers[1]
    const year = onlyNumbers[2]
//     console.log("jour " + day)
//     console.log("mois " + month)
//     console.log("année " + year)

    const maxDays = maxDaysInMonth(month)

    if (day <= maxDays && month >= 01 && month <=12 && year > 999 && year <= 9999){
        console.log("true") //sans le console.log je ne vois pas la valeur dans ma console, pourtant il me semblait que c'était possible
        return true
    }
    else{
        console.log("false")
        return false
    }
}

const dateTest = "11/02/2011" 
//isValidDate(dateTest)

function isPalindrome(date){
    const onlyNumbers = date.split('/') //on récupère les chiffres sans les /
    //console.log(onlyNumbers)
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
        console.log("C'est un palindrome")
        return true
    }
    else {
        console.log("Ce n'est pas un palindrome ou la date n'est pas valide")
        return false
    }

}

isPalindrome(dateTest)
