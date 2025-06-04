// variables
let answer = 0;
let bottomString = "", topString = "";
let mathFunction;
let lastPressed = "num";

// DOM 
const topDisplay = document.getElementById("topDisplay");
const bottomDisplay = document.getElementById("bottomDisplay");
const currentOperator = document.getElementById("operator");

// numeral buttons
const one = document.getElementById("one");
one.addEventListener('click', function () {
    leadingZero();
    Pressed();
    addToBottom(1);
    lastPressed = "num";
});

const two = document.getElementById("two");
two.addEventListener('click', function () {
    leadingZero();
    Pressed();
    addToBottom(2);
    lastPressed = "num";
});

const three = document.getElementById("three");
three.addEventListener('click', function () {
    leadingZero();
    Pressed();
    addToBottom(3);
    lastPressed = "num";
});

const four = document.getElementById("four");
four.addEventListener('click', function () {
    leadingZero();
    Pressed();
    addToBottom(4);
});

const five = document.getElementById("five");
five.addEventListener('click', function () {
    leadingZero();
    Pressed();
    addToBottom(5);
    lastPressed = "num";
});

const six = document.getElementById("six");
six.addEventListener('click', function () {
    leadingZero();
    Pressed();
    addToBottom(6);
    lastPressed = "num";
});

const seven = document.getElementById("seven");
seven.addEventListener('click', function () {
    leadingZero();
    Pressed();
    addToBottom(7);
    lastPressed = "num";
});

const eight = document.getElementById("eight");
eight.addEventListener('click', function () {
    leadingZero();
    Pressed();
    addToBottom(8);
    lastPressed = "num";
});

const nine = document.getElementById("nine");
nine.addEventListener('click', function () {
    leadingZero();
    Pressed();
    addToBottom(9);
    lastPressed = "num";
});

const zero = document.getElementById("zero");
zero.addEventListener('click', function () {
    leadingZero();
    Pressed();
    addToBottom(0);
    lastPressed = "num";
});

//decimal button
const decimal = document.getElementById("decimal");
decimal.addEventListener('click', function () {
    if (containDecimal() != true) {
        addToBottom(".");
    }
});

// equal button
const equal = document.getElementById("equal");
equal.addEventListener('click', function () {
    clearDisplay();
    if ((topString != "") && (bottomString != "")){
        answer = evaulate(topString, bottomString);
        topString = "";
        bottomString = answer;
    } else if (topString == "") {
        answer = evaulate(answer, bottomString);
        topString = "";
        bottomString = answer;
    }
    mathFunction = undefined;
    bottomDisplay.append(bottomString);
    lastPressed = "equal";
});

// ans button
const ans = document.getElementById("ans");
ans.addEventListener('click', function () {

    if ((topString != "") && (bottomString != "")) {
        answer = evaulate(topString, bottomString);
        displayAnsBot;
    } else if (bottomString == "") {
        bottomString = answer;
        clear(bottomDisplay);
        bottomDisplay.append(answer);
    }
});

//
// operator buttons
//
const plus = document.getElementById("plus");
plus.addEventListener('click', function () {
    if (mathFunction == undefined) {
        mathFunction = (a, b) => a + b;
    }
    if (topString == "") {
        topString = bottomString;
        clearBottom();
        topDisplay.append(topString);
    } else {
        answer = evaulate(topString, bottomString);
        clearBottom();
        displayAnsTop();
    }
    mathFunction = (a, b) => a + b;
    currentOperator.append("+");
    lastPressed = "function";
});

const minus = document.getElementById("minus");
minus.addEventListener('click', function () {
    if (mathFunction == undefined) {
        mathFunction = (a, b) => a - b;
    }
    if (topString == "") {
        topString = bottomString;
        clearBottom();
        topDisplay.append(topString);
    } else {
        answer = evaulate(topString, bottomString);
        clearBottom();
        displayAnsTop();
    }
    mathFunction = (a, b) => a - b;
    currentOperator.append("-");
    lastPressed = "function";
});

const divide = document.getElementById("divide");
divide.addEventListener('click', function () {
    if (mathFunction == undefined) {
        mathFunction = (a, b) => a / b;
    }
    if (topString == "") {
        topString = bottomString;
        clearBottom();
        topDisplay.append(topString);
    } else {
        answer = evaulate(topString, bottomString);
        clearBottom();
        displayAnsTop();
    }
    mathFunction = (a, b) => a / b;
    currentOperator.append("/");
    lastPressed = "function";
});

const multiply = document.getElementById("multiply");
multiply.addEventListener('click', function () {
    if (mathFunction == undefined) {
        mathFunction = (a, b) => a - b;
    }
    if (topString == "") {
        topString = bottomString;
        clearBottom();
        topDisplay.append(topString);
    } else {
        answer = evaulate(topString, bottomString);
        clearBottom();
        displayAnsTop();
    }
    mathFunction = (a, b) => a * b;
    currentOperator.append("x");
    lastPressed = "function";
});

// ac button
const ac = document.getElementById("ac");
ac.addEventListener('click', function () {
    clearDisplay();
    clearStrings();
    answer = 0;
    bottomString = "0";
    bottomDisplay.append("0");
});

// del button
const del = document.getElementById("del");
del.addEventListener('click', function () {
    if ((bottomString == "") || (bottomString.length === 1) || (bottomString == "0")) {
        clearBottom();
        addToBottom("0");
    } else if ((bottomString == "0") && (topString != "") && (currentOperator.innerHTML.trim() != "")) {
        clear(currentOperator);
        mathFunction = undefined;
    } else {
        bottomString = bottomString.slice(0, -1);
        clear(bottomDisplay);
        bottomDisplay.append(bottomString);
    }
});

// functions
// clears the display screen on the calculator, input dictates top or bottom
function clear(display) {
    display.innerHTML = "";
};

// checks if bottomString(input) has a leading zero
function leadingZero() {
    if (bottomString == "0") {
        bottomString = "";
        clear(bottomDisplay);
    }
};

function clearBottom() {
    clear(bottomDisplay);
    bottomString = "";
};

function clearTop() {
    clear(topString);
    topString = "";
};

function evaulate(str1, str2) {
    return mathFunction(Number(str1), Number(str2));
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

// topString is for storing "rolling" answers, therefore don't clear strings
function displayAnsTop() {
    clearDisplay();
    clearStrings();
    topString = answer;
    topDisplay.append(topString);
}

// bottomString is for displaying final answer
function displayAnsBot() {
    clearDisplay();
    clearStrings();
    bottomString = answer;
    bottomDisplay.append(bottomString);
}

// adds string to bottomString and Display
function addToBottom(string) {
    bottomString += string;
    bottomDisplay.append(string);
}

// checks to see if bottomString has a decimal
function containDecimal() {
    if (bottomString.includes(".")) {
        return true;
    } else {
        return false;
    }
};

function Pressed() {
    if (lastPressed === "num") {
    } else if (lastPressed == "equal") {
        clear(bottomDisplay);
        bottomString = "";
    } else {

    }
};

function init() {
    bottomString = "0";
    bottomDisplay.append("0");
};

init();