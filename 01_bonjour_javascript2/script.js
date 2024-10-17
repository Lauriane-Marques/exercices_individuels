/*function sayHello(name,hour){

messageJour = `Bonjour ${name}!`
messageNuit = `Bonsoir ${name}!`

    if (hour >= 18) {
        console.log(messageNuit)
    }
    else {
        console.log(messageJour)
}
}
*/

let personnalName = window.prompt ("Quel est ton nom?")

//let firstName = "Beyoncé"

function sayHello(name){
    let message = `Bonjour ${name} !`
    document.querySelector('h1').innerText = message;
}

sayHello(personnalName)
