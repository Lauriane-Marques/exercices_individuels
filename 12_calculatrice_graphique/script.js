const NUM_CONTAINER = document.getElementById('numbers')

let screen = document.getElementById('screen')


// for (let i = 1; i <=9;i++){
//     button = document.createElement('button')
//     NUM_CONTAINER.appendChild(button)
//     button.innerText = i
//     button.id = `btn${i}`
//     button.after(document.getElementById('btn0'))
//     button.after(document.getElementById('btn-plus'))
// }

// const btn1 = document.getElementById('btn1');
// btn1.addEventListener('click', () => {
//   console.log('1');
// });

function displayCalc (pointer) {

    const clickedBtn = pointer.target; 
    const value = clickedBtn.textContent;
    console.log(value)

    screen.innerText += value
}

function clearScreen(){
    screen.innerText=''
}

function calculate(){
    let terms = screen.innerText.split('+')
    let result = 0
    for (let i = 0 ; i < terms.length; i++){
        result += Number(terms[i])
    }
    screen.innerText = result
}

let btns = document.querySelectorAll('button');
btns.forEach( btn => {
    if (btn.id === 'btn-clear'){
        btn.addEventListener('click', clearScreen);
    }
    else if (btn.id === 'btn='){
        btn.addEventListener('click', calculate)
    }
    else {
    btn.addEventListener('click', displayCalc);
    }
})

