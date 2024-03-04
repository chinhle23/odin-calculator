const add = (a, b) => +a + +b;
const subtract = (a, b) => +a - +b;
const multiply = (a, b) => +a * +b;
const divide = (a, b) => +a / +b;

let firstNum = '';
let secondNum = '';
let operator = '';

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

let numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
  number.addEventListener('click', () => {
    if (operator === '') {
      firstNum += number.value;
      display.textContent = firstNum;
    } else {
      secondNum += number.value;
      display.textContent = secondNum;
    }
  });
});

let operators = document.querySelectorAll('.operator');

operators.forEach(item => {
  item.addEventListener('click', () => {
    operator = item.value;
    display.textContent = operator;
  });
});