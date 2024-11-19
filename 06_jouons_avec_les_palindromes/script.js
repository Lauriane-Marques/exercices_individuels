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
        console.log("true")
        return true
    }
    else{
        console.log("false")
        return false
    }
}

const dateTest = "22/11/2023" 
isValidDate(dateTest)