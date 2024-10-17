function sayHello(name,hour){

messageJour = `Bonjour ${name}!`
messageNuit = `Bonsoir ${name}!`

    if (hour >= 18) {
        console.log(messageNuit)
    }
    else {
        console.log(messageJour)
}
}

let firstName = "Beyoncé"

sayHello(firstName,11)
sayHello(firstName,18)
sayHello(firstName,17)