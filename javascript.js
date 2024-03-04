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

let firstNum = '';
let secondNum = '';
let operator = '';
let solution = '';

const operate = (a, b, op) => {
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

let display = document.querySelector('#display');
let clearButton = document.querySelector('#clear');
let numbers = document.querySelectorAll('.number');

clearButton.addEventListener('click', () => clear());

numbers.forEach(number => {
  number.addEventListener('click', () => {
    if (operator === '') {
      firstNum += number.value;
      display.textContent = firstNum;
    } else {
      secondNum += number.value;
      display.textContent = `${firstNum} ${operator} ${secondNum}`;
    }
  });
});

let operators = document.querySelectorAll('.operator');

operators.forEach(item => {
  item.addEventListener('click', () => {
    if (firstNum !== '' && secondNum !== '' && operator !== '') {
      solution = operate(+firstNum, +secondNum, operator);
      firstNum = solution;
      secondNum = '';
      operator = item.value;
    } else if (firstNum !== '') {
      operator = item.value;
    } else {
      firstNum = '0';
      operator = item.value;
    }
    display.textContent = `${firstNum} ${operator}`;
  });
});