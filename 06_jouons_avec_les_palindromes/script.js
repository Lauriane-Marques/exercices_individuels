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

console.log(maxDaysInMonth(07))