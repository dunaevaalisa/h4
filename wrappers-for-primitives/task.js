'use strict';
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
let nameP;
  let meaningP;
  if (nameP=0) {

  } else {
    console.log(`Параметр ${nameP} содержит неправильное значение ${meaningP}`);
  }
  let S = amount;
  let P = 1 / 12 * percent;
  let n = date;
  let totalAmount = S * (P + P / (((1 + P) ^ n) - 1));
  console.log(totalAmount);
    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    let greetings = 'Привет, мир! Меня зовут ';
if (name === String) {
  let greeting1 = greetings + name
console.log(greeting1);
return greetings;
} else {
  let greeting1 = greetings + 'Аноним';
console.log(greeting1);
return greeting1;
}
}
