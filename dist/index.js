"use strict";
let num1 = document.getElementById('num1');
let randomNum1 = document.getElementById("randomNum1");
let randomNum2 = document.getElementById("randomNum2");
let num2 = document.getElementById("num2");
let add = document.getElementById("add");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let exponent = document.getElementById("exponent");
let percentageOf = document.getElementById("percentageOf");
let submit = document.getElementById("submit");
let results = document.getElementById("results");
const MAX_VALUE = 20000;
const MIN_VALUE = 0.0000001;
num1.addEventListener('input', () => {
    let number = num1.valueAsNumber;
    if (number >= MAX_VALUE) {
        num1.valueAsNumber = MAX_VALUE;
    }
    else if (number < MIN_VALUE || isNaN(number)) {
        num1.valueAsNumber = MIN_VALUE;
    }
});
randomNum1.addEventListener('click', () => {
    num1.valueAsNumber = Math.floor(Math.random() * MAX_VALUE);
});
num2.addEventListener('input', () => {
    let number = num2.valueAsNumber;
    number > MAX_VALUE || number < MIN_VALUE ? num2.valueAsNumber = MIN_VALUE : num2.valueAsNumber = Number(number);
    if (number > MAX_VALUE) {
        num2.valueAsNumber = MAX_VALUE;
    }
    else
        (number < MIN_VALUE ? num2.valueAsNumber = MIN_VALUE : num2.valueAsNumber = Number(number));
});
randomNum2.addEventListener('click', () => {
    num2.valueAsNumber = Math.floor(Math.random() * MAX_VALUE);
});
let result = "";
add.addEventListener('click', () => {
    const calculate = (numb1, numb2) => (numb1 + numb2);
    result = calculate(num1.valueAsNumber, num2.valueAsNumber).toString();
    return result;
});
minus.addEventListener('click', () => {
    const calculate = (numb1, numb2) => (numb1 - numb2);
    result = calculate(num1.valueAsNumber, num2.valueAsNumber).toString();
    return result;
});
multiply.addEventListener('click', () => {
    const calculate = (numb1, numb2) => (numb1 * numb2);
    result = calculate(num1.valueAsNumber, num2.valueAsNumber).toString();
    return result;
});
divide.addEventListener('click', () => {
    const calculate = (numb1, numb2) => {
        if (numb1 === 0 && numb2 === 0) {
            results.innerText = " Cannot divide by zero, this could cause the collapse of the universe, please divide with caution.";
            return 0;
        }
        else if (numb1 === 0 || numb2 === 0) {
            return 0;
        }
        else {
            return numb1 / numb2;
        }
    };
    result = calculate(num1.valueAsNumber, num2.valueAsNumber).toString();
    return result;
});
exponent.addEventListener('click', () => {
    const calculate = (numb1, numb2) => (Math.pow(numb1, numb2));
    result = calculate(num1.valueAsNumber, num2.valueAsNumber).toString();
    return result;
});
percentageOf.addEventListener('click', () => {
    const calculate = (numb1, numb2) => {
        return numb1 < numb2 ? Number(((numb1 / 100) * numb2).toFixed(2)) : Number(((numb1 / numb2) * 100).toFixed(2));
    };
    result = `${calculate(num1.valueAsNumber, num2.valueAsNumber).toString()}`;
    return result;
});
submit.addEventListener('click', () => {
    results.innerText = "Results: ";
    results.innerText += ` ${result}`;
});
