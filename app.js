const board = document.querySelector('#board');
const SQUARS_NUMBER = 700;
const colors = ['#228653', '#BFB330', '#540EAD', '#A63A00', '#2C17B1', '#369100', '#F80012', '#015367'];

for (let i = 0; i < SQUARS_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', setColor);
  board.append(square);

  square.addEventListener('mouseleave', removeColor);
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}