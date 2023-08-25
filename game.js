// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const number3 = document.getElementById('number3');
let timer = document.getElementById('timer')
let time=21;
let score =  0;
let randomOp;

function randomNum(){
    return Math.floor(Math.random()*100)
}

function displayNum(){
    let num1 = randomNum();
    let num2 = randomNum();
    number1.innerText = num1;
    number2.innerText = num2;

    thirdNum(num1,num2);
}

displayNum();

// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

function thirdNum(num1,num2){
    let operations=['+','-','X','/','%'];
    randomOp = operations[Math.floor(Math.random()*5)]
    if (randomOp == '+') number3.innerText = num1+num2;
    else if (randomOp == '-') number3.innerText = num1-num2;
    else if (randomOp == 'X') number3.innerText = num1*num2;
    else if (randomOp == '/') number3.innerText = Math.floor(num1/num2);
    else if (randomOp == '%') number3.innerText = num1%num2;
}



// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

document.getElementById('buttons').addEventListener('click',(e) => {
    checkAnswer(e.target.id);
})

function checkAnswer(id){
    if (id =='plus' && randomOp == '+' || id =='minus' && randomOp == '-' || id =='mul' && randomOp == 'X' || id =='divide' && randomOp == '/' || id =='modulus' && randomOp == '%' ){
        time=21;
        displayNum();
        score++;
        localStorage.setItem('score',score);
    }
    else{
        window.location.href='gameover.html'
    }

}

// Iteration 7: Making Timer functional

setInterval(setTimer,1000)

function setTimer(){
    time--;
    if(time==0){
        window.location.href='gameover.html';
    }
    timer.innerText=time;
}