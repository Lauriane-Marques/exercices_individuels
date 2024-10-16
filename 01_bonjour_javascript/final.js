function sayHello(name,hour){


//console.log(message)

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
let message = `Bonjour ${firstName}!`

sayHello(firstName,11)
sayHello(firstName,18)
sayHello(firstName,17)

document.querySelector('h1').innerHTML = message