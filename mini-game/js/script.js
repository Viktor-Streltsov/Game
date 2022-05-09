const board = document.querySelector('#boaed');
const SQUARES_NUMBER = 320; 
const colors = ['#3E94D1', '#65A5D1', '#4E51D8', '#7375D8'];


for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    
square.addEventListener('mouseover', () =>  
setColor(square));
square.addEventListener('mouseleave', () =>  
removeColor(square));

board.append(square);
}

function setColor(element) {
    const color = getColorRendom();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getColorRendom() {
   const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}