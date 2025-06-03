// variables
let answer = 0;
let bottomString = "", topString = "";
let sum = 0;
let mathFunction = (a, b) => a + b;

// DOM 
const topDisplay = document.getElementById("topDisplay");
const bottomDisplay = document.getElementById("bottomDisplay");
const currentOperator = document.getElementById("operator");

// numeral buttons
const one = document.getElementById("one");
one.addEventListener('click', function () {
    leadingZero();
    addToBottom(1)
});

const two = document.getElementById("two");
two.addEventListener('click', function () {
    leadingZero();
    addToBottom(2);
});

const three = document.getElementById("three");
three.addEventListener('click', function () {
    leadingZero();
    addToBottom(3);
});

const four = document.getElementById("four");
four.addEventListener('click', function () {
    leadingZero();
    addToBottom(4);
});

const five = document.getElementById("five");
five.addEventListener('click', function () {
    leadingZero();
    addToBottom(5);
});

const six = document.getElementById("six");
six.addEventListener('click', function () {
    leadingZero();
    addToBottom(6);
});

const seven = document.getElementById("seven");
seven.addEventListener('click', function () {
    leadingZero();
    addToBottom(7);
});

const eight = document.getElementById("eight");
eight.addEventListener('click', function () {
    leadingZero();
    addToBottom(8);
});

const nine = document.getElementById("nine");
nine.addEventListener('click', function () {
    leadingZero();
    addToBottom(9);
});

const zero = document.getElementById("zero");
zero.addEventListener('click', function () {
    leadingZero();
    addToBottom(0);
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
    displayAnsBottom();
    clearStrings();
    bottomString = answer;
    lastpress = "function";
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
    mathFunction = (a, b) => a + b;
    clearDisplay;

    if (topString == "") {
        answer = bottomString;
        displayAnsTop();
    } else {
        answer = evaulate(topString, bottomString);
        clearBottom();
        displayAnsTop();
    }
    currentOperator.append("+");
});

const minus = document.getElementById("minus");
minus.addEventListener('click', function () {
    mathFunction = (a, b) => a - b;
    clearDisplay;

    if (topString == "") {
        answer = bottomString;
        displayAnsTop();
    } else {
        answer = evaulate(topString, bottomString);
        clearBottom();
        displayAnsTop();
    }
    currentOperator.append("-");
});

const divide = document.getElementById("divide");
divide.addEventListener('click', function () {
    mathFunction = (a, b) => a / b;
    clearDisplay;

    if (topString == "") {
        answer = bottomString;
        displayAnsTop();
    } else {
        answer = evaulate(topString, bottomString);
        clearBottom();
        displayAnsTop();
    }
    currentOperator.append("/");
});

const multiply = document.getElementById("multiply");
multiply.addEventListener('click', function () {
    mathFunction = (a, b) => a * b;
    clearDisplay;

    if (topString == "") {
        answer = bottomString;
        displayAnsTop();
    } else {
        answer = evaulate(topString, bottomString);
        clearBottom();
        displayAnsTop();
    }
    currentOperator.append("x");
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
}

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

function displayAnsTop() {
    clearDisplay();
    clearStrings();
    topString = `${answer}`;
    topDisplay.append(topString);
}

function displayAnsBot() {
    clearDisplay();
    clearStrings();
    bottomString = `${answer}`;
    topDisplay.append(bottomString);
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

function justifyAns(ans) {
    if (ans.length > 12) {
        ans = ans.slice(0, 12);
    } return ans;
};

function init() {
    bottomString = "0";
    bottomDisplay.append("0");
};

init();