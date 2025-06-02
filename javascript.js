// variables
let ans;
let bottomString = "", topString = "";
let mathFunction = (a, b) => a + b;

// DOM 
const topDisplay = document.getElementById("topDisplay");
const bottomDisplay = document.getElementById("bottomDisplay");
const currentOperator = document.getElementById("operator");

// numeral buttons
const one = document.getElementById("one");
one.addEventListener('click', function () {
    bottomString += "1";
    bottomDisplay.append('1');
});

const two = document.getElementById("two");
two.addEventListener('click', function () {
    bottomString += "2";
    bottomDisplay.append('2');
});

const three = document.getElementById("three");
three.addEventListener('click', function () {
    bottomString += "3";
    bottomDisplay.append('3');
});

const four = document.getElementById("four");
four.addEventListener('click', function () {
    bottomString += "4";
    bottomDisplay.append('4');
});

const five = document.getElementById("five");
five.addEventListener('click', function () {
    bottomString += "5";
    bottomDisplay.append('5');
});

const six = document.getElementById("six");
six.addEventListener('click', function () {
    bottomString += "6";
    bottomDisplay.append('6');
});

const seven = document.getElementById("seven");
seven.addEventListener('click', function () {
    bottomString += "7";
    bottomDisplay.append('7');
});

const eight = document.getElementById("eight");
eight.addEventListener('click', function () {
    bottomString += "8";
    bottomDisplay.append('8');
});

const nine = document.getElementById("nine");
nine.addEventListener('click', function () {
    bottomString += "9";
    bottomDisplay.append('9');
});

const zero = document.getElementById("zero");
zero.addEventListener('click', function () {
    if (bottomString === "") {
        bottomString = "0";
    } else if (bottomString === "0") {
    } else {
        bottomString += "0";
        bottomDisplay.append('0');
    }
});

// operator buttons
const plus = document.getElementById("plus");
plus.addEventListener('click', function () {
    if (bottomString === "") {
    } else {
        clear(bottomDisplay);
        topDisplay.append(bottomString);
        topString = bottomString;
        bottomString = "";
        clear(currentOperator);
        currentOperator.append("+");
        mathFunction = (a, b) => a + b;
    }
});

const minus = document.getElementById("minus");
minus.addEventListener('click', function () {
    if (bottomString === "") {
    } else {
        clear(bottomDisplay);
        topDisplay.append(bottomString);
        clear(currentOperator);
        currentOperator.append("-");
        mathFunction = (a, b) => a - b;
    }
});

const divide = document.getElementById("divide");
divide.addEventListener('click', function () {
    if (bottomString === "") {
    } else {
        clear(bottomDisplay);
        topDisplay.append(bottomString);
        clear(currentOperator);
        currentOperator.append("/");
        mathFunction = (a, b) => a / b;
    }
});

const multiply = document.getElementById("multiply");
multiply.addEventListener('click', function () {
    if (bottomString === "") {
    } else {
        clear(bottomDisplay);
        topDisplay.append(bottomString);
        clear(currentOperator);
        currentOperator.append("x");
        mathFunction = (a, b) => a * b;
    }
});

// equal button
const equal = document.getElementById("equal");
equal.addEventListener('click', function () {
    if (bottomString === "") {
        ans = Number(topString);
        clear(currentOperator);
        currentOperator.append("ans");
    } else {
        clear(topDisplay);
        clear(currentOperator);
        clear(bottomDisplay);
        ans = evaulate(topString, bottomString);
        topString = "";
        bottomString = "";
        bottomDisplay.append(evaulate(topString, bottomString));
    }
});

// ac button
const ac = document.getElementById("ac");
ac.addEventListener('click', function () {
    clear(topDisplay);
    clear(bottomDisplay);
    clear(currentOperator);
    topString = "";
    bottomString = "";
    ans = 0;
});


// functions
function clear(display) {
    display.innerHTML = "";
};

function evaulate(str1, str2) {
    return Number(str1) + Number(str2);
}