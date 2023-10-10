/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const substract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#sum").value = add(subtractNumber1, subtractNumber2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector("#factor1").value);
    let multiplyNumber2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    let divideNumber1 = Number(document.querySelector("#dividend").value);
    let divideNumber2 = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(divideNumber1, divideNumber2);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.querySelector("#year").value = currentYear

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]
document.querySelector("#array").innerHTML = numbersArray;

/* Output Odds Only Array */
const odds = numbersArray.filter(numbers => numbers % 2 == 1);
document.querySelector("#odds").innerHTML = odds
/* Output Evens Only Array */
const evens = numbersArray.filter(numbers => numbers % 2 == 0);
document.querySelector("#evens").innerHTML = evens;
/* Output Sum of Org. Array */
numbersArray.reduce((sum, number) => sum + number) = document.querySelector("#sumOfArray").innerHTML
/* Output Multiplied by 2 Array */
numbersA.map((numbers) => numbers * 2);
document.querySelector("#multiplied").innerHTML = mult;
/* Output Sum of Multiplied by 2 Array */
const sumMult = mult.reduce((sum, numbers) => sum + numbers, 0);
document.querySelector("#sumOfMultiplied").innerHTML = sumMult;