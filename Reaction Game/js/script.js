const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['red', 'green', 'yellow', 'blue'];
let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) =>  {
    event.preventDefault();
    screens[0].classList.add('up');
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute ('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains ('circle')) {
        score++;
        event.target.remove();
        createRandomCirkle();
    }
})

function startGame() {
    setInterval(decreseTime, 1000);
    createRandomCirkle();
    setTime(time);
}


function decreseTime() {
    if (time === 0) {
        finishGame()
    }else {
    let current = --time;
    if (current < 10) {
        current = `0${current}`;
    }
    setTime(current);
    }
    
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
    timeEl.parentNode.remove();
    board.innerHTML = `<h1>Game over <hr/> <span class="primary">${score}<span/><h1/>`;
}


function createRandomCirkle() {
    const cirkle = document.createElement('div');
    const size = getCircleRandomNumber(10, 60);
    const {width, height} = board.getBoundingClientRect();
    const x = getCircleRandomNumber(0, width - size);
    const y = getCircleRandomNumber(0, height - size);
    

    cirkle.addEventListener('mouseover', () =>  
    setColor(cirkle));
    cirkle.addEventListener('mouseleave', () =>  
    removeColor(cirkle));


    cirkle.classList.add('circle');
    cirkle.style.width = `${size}px`;
    cirkle.style.height = `${size}px`;
    cirkle.style.top = `${y}px`;
    cirkle.style.left = `${x}px`;
    board.append(cirkle);
}

function getCircleRandomNumber(min, max) {
   return Math.round(Math.random() * (max - min) + min);
}

function getColorRendom() {
    const index = Math.floor(Math.random() * colors.length);
     return colors[index];
 }
 function setColor(element) {
    const color = getColorRendom();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}