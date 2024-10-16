function sayHello(firstName,hour){

/*let message = "Bonjour !"
console.log(message)*/

messageJour = `Bonjour ${firstName}!`
messageNuit = `Bonsoir ${firstName}!`

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