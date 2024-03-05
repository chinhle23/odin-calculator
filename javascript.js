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

const handleOperators = (clicked) => {
  if (firstNum !== '' && secondNum !== '' && operator !== '') {
    solution = operate(+firstNum, +secondNum, operator);
    if (typeof solution === 'number') {
      firstNum = solution;
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
    solution = operate(+firstNum, +secondNum, operator);
    if (typeof solution === 'number') {
      display.textContent = `${firstNum} ${operator} ${secondNum} = ${solution}`;
      firstNum = solution;
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

let firstNum = '';
let secondNum = '';
let operator = '';
let solution = '';
let display = document.querySelector('#text');
let clearButton = document.querySelector('#clear');
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let equalsButton = document.querySelector('#equals');

clearButton.addEventListener('click', () => clear());

numbers.forEach(number => {
  number.addEventListener('click', () => handleNumbers(number.value));
});

operators.forEach(operator => {
  operator.addEventListener('click', () => handleOperators(operator.value));
});

equalsButton.addEventListener('click', () => handleEquals());