const add = (a, b) => +a + +b;
const subtract = (a, b) => +a - +b;
const multiply = (a, b) => +a * +b;
const divide = (a, b) => +a / +b;

const clear = () => {
  firstNum = '';
  secondNum = '';
  operator = '';
  solution = '';
  display.textContent = '';
}

const operate = (a, b, op) => {
  if (b === 0 && op === '/') {
    secondNum = '';
    operator = '';
    return `Even 5th Graders know not to divide by zero. Start over!`;
  }
  switch (op) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}

const handleNumbers = (clicked) => {
  if (display.textContent.includes('=')) {
    firstNum = clicked;
    display.textContent = firstNum;
  } else if (operator === '') {
    firstNum += clicked;
    display.textContent = firstNum;
  } else {
    secondNum += clicked;
    display.textContent = `${firstNum} ${operator} ${secondNum}`;
  }
}

const handleDecimal = (clicked) => {
  if (display.textContent.includes('=') || firstNum === '') {
    firstNum = `0${clicked}`;
    display.textContent = firstNum;
  } else if (operator === '' && !firstNum.includes('.')) {
    firstNum += clicked;
    display.textContent = firstNum;
  } else if (operator !== '' && secondNum === '') {
    secondNum = `0${clicked}`;
    display.textContent = `${firstNum} ${operator} ${secondNum}`;
  } else if (operator !== '' && !secondNum.includes('.')) {
    secondNum += clicked;
    display.textContent = `${firstNum} ${operator} ${secondNum}`;
  }
}

const handleOperators = (clicked) => {
  if (firstNum !== '' && secondNum !== '' && operator !== '') {
    solution = operate(+firstNum, +secondNum, operator)
    solutionRounded = Math.round(1e12 * solution) / 1e12;
    if (typeof solution === 'number') {
      firstNum = solutionRounded;
      operator = clicked;
      display.textContent = `${firstNum} ${operator}`;
    } else {
      display.textContent = solution;
      firstNum = '';
    }
    secondNum = '';
  } else if (firstNum !== '') {
    operator = clicked;
    display.textContent = `${firstNum} ${operator}`;
  } else {
    firstNum = '0';
    operator = clicked;
    display.textContent = `${firstNum} ${operator}`;
  }
}

const handleEquals = () => {
  if (firstNum !== '' && secondNum !== '' && operator !== '') {
    solution = operate(+firstNum, +secondNum, operator)
    solutionRounded = Math.round(1e12 * solution) / 1e12;
    if (typeof solution === 'number') {
      display.textContent = `${firstNum} ${operator} ${secondNum} = ${solutionRounded}`;
      firstNum = solutionRounded;
    } else {
      display.textContent = solution;
      firstNum = '';
    }
    secondNum = '';
    operator = '';
  } else {
    display.textContent = `${firstNum} ${operator}`;
  }
}

const handleBackspace = () => {
  if (display.textContent.includes('=')) {
    return clear();
  } else if (operator === '') {
    firstNum = firstNum.slice(0, firstNum.length - 1);
    if (isNaN(+firstNum)) { 
      firstNum = ''; 
    }
    display.textContent = firstNum;
  } else {
    secondNum = secondNum.slice(0, secondNum.length - 1);
    if (isNaN(+secondNum)) { 
      secondNum = ''; 
    }
    display.textContent = `${firstNum} ${operator} ${secondNum}`;
  }
}

const handleKeyPress = (e) => {
  if (/\d/.test(e.key)) {
    return handleNumbers(e.key);
  } else if (e.key === '.') {
    return handleDecimal(e.key);
  } else if (/[*/+-]/.test(e.key)) {
    return handleOperators(e.key);
  } else if (e.key === '=' || e.key === 'Enter') {
    return handleEquals(e.key);
  } else if (e.key === 'Backspace') {
    return handleBackspace(e.key);
  } else if (e.key === 'Clear') {
    return clear();
  }
}

let firstNum = '';
let secondNum = '';
let operator = '';
let solution = '';
let display = document.querySelector('#text');
let clearButton = document.querySelector('#clear');
let numbers = document.querySelectorAll('.number');
let decimalButton = document.querySelector('#decimal');
let operators = document.querySelectorAll('.operator');
let equalsButton = document.querySelector('#equals');
let backspaceButton = document.querySelector('#backspace');

clearButton.addEventListener('click', () => clear());

numbers.forEach(number => {
  number.addEventListener('click', () => handleNumbers(number.value));
});

decimalButton.addEventListener('click', (e) => handleDecimal(e.target.value));

operators.forEach(operator => {
  operator.addEventListener('click', () => handleOperators(operator.value));
});

equalsButton.addEventListener('click', () => handleEquals());

backspaceButton.addEventListener('click', () => handleBackspace());

document.addEventListener('keydown', (e) => handleKeyPress(e));
