// variables
let answer = 0, total = 0;
let bottomString = "", topString = "", totalString = ""; 
let holder = 0, lastpress = "num";
let mathFunction = (a, b) => a + b;

// DOM 
const topDisplay = document.getElementById("topDisplay");
const bottomDisplay = document.getElementById("bottomDisplay");
const currentOperator = document.getElementById("operator");



// numeral buttons
const one = document.getElementById("one");
one.addEventListener('click', function () {
    lastPressed();
    lastpress = "num";
    appendDisplay(1);
});

const two = document.getElementById("two");
two.addEventListener('click', function () {
    lastPressed();
    lastpress = "num";
    appendDisplay(2);
});

const three = document.getElementById("three");
three.addEventListener('click', function () {
    lastPressed();
    lastpress = "num";
    appendDisplay(3);
});

const four = document.getElementById("four");
four.addEventListener('click', function () {
    lastPressed();
    lastpress = "num";
    appendDisplay(4);
});

const five = document.getElementById("five");
five.addEventListener('click', function () {
    lastPressed();
    lastpress = "num";
    appendDisplay(5);
});

const six = document.getElementById("six");
six.addEventListener('click', function () {
    lastPressed();
    lastpress = "num";
    appendDisplay(6);
});

const seven = document.getElementById("seven");
seven.addEventListener('click', function () {
    lastPressed();
    lastpress = "num";
    appendDisplay(7);
});

const eight = document.getElementById("eight");
eight.addEventListener('click', function () {
    lastPressed();
    lastpress = "num";
    appendDisplay(8);
});

const nine = document.getElementById("nine");
nine.addEventListener('click', function () {
    lastPressed();
    lastpress = "num";
    appendDisplay(9);
});

const zero = document.getElementById("zero");
zero.addEventListener('click', function () {
    lastPressed();
    lastpress = "num";
    if ((bottomString === "") || (bottomString === "0") || (containDecimal())) {
    } else {
        appendDisplay(0);
    }
});

//decimal button
const decimal = document.getElementById("decimal");
decimal.addEventListener('click', function () {
    if (containDecimal() != true) {
        appendDisplay(".");
    }
});

// operator buttons
const plus = document.getElementById("plus");
plus.addEventListener('click', function () {
    mathFunction = (a, b) => a + b;
    moveUp();
    currentOperator.append("+");
});

const minus = document.getElementById("minus");
minus.addEventListener('click', function () {
    mathFunction = (a, b) => a - b;
    moveUp();
    currentOperator.append("-");
});

const divide = document.getElementById("divide");
divide.addEventListener('click', function () {
    mathFunction = (a, b) => a / b;
    moveUp();
    currentOperator.append("/");
});

const multiply = document.getElementById("multiply");
multiply.addEventListener('click', function () {
    mathFunction = (a, b) => a * b;
    moveUp();
    currentOperator.append("x");
});

// equal button
const equal = document.getElementById("equal");
equal.addEventListener('click', function () {
    clearDisplay();
    displayAnsBottom();
    clearStrings();
    bottomString = answer;
    lastpress = "function";
});

// ac button
const ac = document.getElementById("ac");
ac.addEventListener('click', function () {
    clearDisplay();
    clearStrings();
    answer = 0;
    bottomDisplay.append("0");
});

// ans button
const ans = document.getElementById("ans");
ans.addEventListener('click', function () {
    if ((bottomString == "0") || (bottomString != "")) {
    } else {
    bottomDisplay.append(answer);
    bottomString = `${answer}`;
    }
});

const del = document.getElementById("del");
del.addEventListener('click', function () {
    if (bottomString == "") {       
    } else {
        bottomString = bottomString.substring(0,bottomString.length-1);
        clear(bottomDisplay);
        bottomDisplay.append(bottomString);
    }
});

// functions
// 
function clear(display) {
    display.innerHTML = "";
};

// appends str to bottom display and bottomString
function appendDisplay(value) {
    bottomString += `${value}`;
    bottomDisplay.append(`${value}`);
}

function displayAnsBottom() {
    answer = evaulate(topString, bottomString);
    bottomDisplay.append(answer);
};

function displayAnsTop() {
    topString = evaulate(topString, bottomString);
    topDisplay.append(topString);
};

function evaulate(str1, str2) {
    return mathFunction(Number(str1), Number(str2));
};

// checks last button pressed
function lastPressed() {
    if (lastpress == "function") {
        bottomString = "";
        answer = evaulate(topString, bottomString);
        clear(bottomDisplay);
    }
};

// this function clears the display not variables
function clearDisplay() {
    clear(topDisplay);
    clear(bottomDisplay);
    clear(currentOperator);
};

// this function clears variable topString and bottomString;
function clearStrings() {
    topString = "";
    bottomString = "";
};

function moveUp() {
    topString = bottomString;
    bottomString = "";
    topDisplay.append(topString);
    clear(bottomDisplay);
};

function containDecimal() {
    if (bottomString.includes(".")) {
        return true;
    } else {
        return false;
    }
};

function init() {
    bottomString = "";
    appendDisplay(0);
    lastpress = "function";
};

init();