let num1:HTMLInputElement = document.getElementById('num1') as HTMLInputElement;
let randomNum1:HTMLButtonElement = document.getElementById("randomNum1") as HTMLButtonElement;
let randomNum2:HTMLButtonElement = document.getElementById("randomNum2") as HTMLButtonElement;
let num2:HTMLInputElement = document.getElementById("num2") as HTMLInputElement;
let add:HTMLButtonElement = document.getElementById("add") as HTMLButtonElement;
let minus:HTMLButtonElement = document.getElementById("minus") as HTMLButtonElement;
let multiply:HTMLButtonElement = document.getElementById("multiply") as HTMLButtonElement;
let divide:HTMLButtonElement = document.getElementById("divide") as HTMLButtonElement;
let exponent:HTMLButtonElement = document.getElementById("exponent") as HTMLButtonElement;
let percentageOf:HTMLButtonElement = document.getElementById("percentageOf") as HTMLButtonElement;
let submit:HTMLButtonElement = document.getElementById("submit") as HTMLButtonElement;
let results:HTMLParagraphElement = document.getElementById("results") as HTMLParagraphElement;

num1.addEventListener('input', ():void => {
    let number:number = num1.valueAsNumber;
    if(number >= 20000){
        num1.valueAsNumber = 20000;
    }else if (number <= 0 || isNaN(number)){
        num1.valueAsNumber = 0;
    }
});
randomNum1.addEventListener('click', ():void => {
    num1.valueAsNumber = Math.floor(Math.random() * 20000);
});
num2.addEventListener('input', ():void => {
    let number:number = num2.valueAsNumber;
    if(number >= 20000){
        num2.valueAsNumber = 20000;
    }else (number <= 0.0000000001 ? num2.valueAsNumber = 0 : num2.valueAsNumber = Number(number));
});
randomNum2.addEventListener('click', ():void => {
    num2.valueAsNumber = Math.floor(Math.random() * 20000);
});
let result:string = "";
add.addEventListener('click', ():string => {
    const calculate:(numb1:number, numb2:number) => number = (numb1:number, numb2:number):number => (numb1 + numb2);
    result = calculate(num1.valueAsNumber, num2.valueAsNumber).toString();
    return result;
});
minus.addEventListener('click', ():string => {
    const calculate:(numb1:number, numb2:number) => number = (numb1:number, numb2:number):number => (numb1 - numb2);
    result = calculate(num1.valueAsNumber, num2.valueAsNumber).toString();
    return result
});
multiply.addEventListener('click', ():string => {
    const calculate:(numb1:number, numb2:number) => number = (numb1:number, numb2:number):number => (numb1 * numb2);
    result = calculate(num1.valueAsNumber, num2.valueAsNumber).toString();
    return result;
});
divide.addEventListener('click', ():string => {
    const calculate:(numb1:number, numb2:number) => number = (numb1:number, numb2:number):number => {
        if(numb1 === 0 && numb2 === 0){
            results.innerText = " idiot";
            return 0;
        }else if(numb1 === 0 || numb2 === 0){
            return 0;
        }else {
            return numb1 / numb2;
        }
    }
    result = calculate(num1.valueAsNumber, num2.valueAsNumber).toString();
    return result;
});
exponent.addEventListener('click', ():string => {
    const calculate:(numb1:number, numb2:number) => number = (numb1:number, numb2:number):number => (Math.pow(numb1, numb2));
    result = calculate(num1.valueAsNumber, num2.valueAsNumber).toString();
    return result;
});
percentageOf.addEventListener('click', ():string => {
    const calculate:(numb1:number, numb2:number) => number = (numb1:number, numb2:number):number => {
        numb1 > numb2 ? (numb1 / numb2) * 100 : (numb2 / numb1) * 100;
    }
    result = `${calculate(num1.valueAsNumber, num2.valueAsNumber).toString()} %`;
    return result;
});

submit.addEventListener('click', ():void => {
    results.innerText = "Results: ";
    results.innerText += ` ${result}`;
});