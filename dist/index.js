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
num1.addEventListener('input', () => {
    let number = num1.valueAsNumber;
    if (number >= 20000) {
        num1.valueAsNumber = 20000;
    }
    else if (number <= 0 || isNaN(number)) {
        num1.valueAsNumber = 0;
    }
});
randomNum1.addEventListener('click', () => {
    num1.valueAsNumber = Math.floor(Math.random() * 20000);
});
num2.addEventListener('input', () => {
    let number = num2.valueAsNumber;
    if (number >= 20000) {
        num2.valueAsNumber = 20000;
    }
    else
        (number <= 0.0000000001 ? num2.valueAsNumber = 0 : num2.valueAsNumber = Number(number));
});
randomNum2.addEventListener('click', () => {
    num2.valueAsNumber = Math.floor(Math.random() * 20000);
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
            results.innerText = " idiot";
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
