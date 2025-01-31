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

    const clickedNumber = pointer.target; 
    const number = clickedNumber.textContent;
    console.log(number)

    screen.innerText += number
}

let btns = document.querySelectorAll('button');
btns.forEach( btn => {

    btn.addEventListener('click', displayCalc);
})