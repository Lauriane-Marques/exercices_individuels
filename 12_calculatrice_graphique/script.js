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
    
    if (screen.innerText.includes('+')){
        let terms = screen.innerText.split('+')
        let additionResult = 0
        for (let i = 0 ; i < terms.length; i++){
            additionResult += Number(terms[i])
        }
        screen.innerText = additionResult
    }

    else if (screen.innerText.includes('-')){
        let terms = screen.innerText.split('-')
        let subResult = terms[0]
        for (let i = 1; i<terms.length; i++){
            subResult -= Number(terms[i])
        }
        screen.innerText = subResult
    }

    
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

