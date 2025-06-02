// variables
let ans = 0, total = 0;
let bottomString = "", topString = "", totalString = ""; lastpress = "num";
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
    bottomString += "1";
    totalString += "1";
    bottomDisplay.append('1');

});

const two = document.getElementById("two");
two.addEventListener('click', function () {
    lastPressed();
    lastpress = "num";
    bottomString += "2";
    totalString += "2";
    bottomDisplay.append('2');

});

const three = document.getElementById("three");
three.addEventListener('click', function () {
    lastPressed();
    lastpress = "num";
    bottomString += "3";
    totalString += "3";
    bottomDisplay.append('3');

});

const four = document.getElementById("four");
four.addEventListener('click', function () {
    lastPressed();
    lastpress = "num";
    bottomString += "4";
    totalString += "4";
    bottomDisplay.append('4');
});

const five = document.getElementById("five");
five.addEventListener('click', function () {
    lastPressed();
    lastpress = "num";
    bottomString += "5";
    totalString += "5";
    bottomDisplay.append('5');
});

const six = document.getElementById("six");
six.addEventListener('click', function () {
    lastPressed();
    lastpress = "num";
    bottomString += "6";
    totalString += "6";
    bottomDisplay.append('6');
});

const seven = document.getElementById("seven");
seven.addEventListener('click', function () {
    lastPressed();
    lastpress = "num";
    bottomString += "7";
    totalString += "7";
    bottomDisplay.append('7');
});

const eight = document.getElementById("eight");
eight.addEventListener('click', function () {
    lastPressed();
    lastpress = "num";
    bottomString += "8";
    totalString += "8";
    bottomDisplay.append('8');
});

const nine = document.getElementById("nine");
nine.addEventListener('click', function () {
    lastPressed();
    lastpress = "num"; lastpress = "num";
    bottomString += "9";
    totalString += "9";
    bottomDisplay.append('9');
});

const zero = document.getElementById("zero");
zero.addEventListener('click', function () {
    lastPressed();
    lastpress = "num";
    if (bottomString === "") {
    } else if (bottomString === "0") {
    } else {
        bottomString += "0";
        totalString += "0";
        bottomDisplay.append('0');
    }
});

//decimal button
const decimal = document.getElementById("decimal");
zero.addEventListener('click', function () {
    let counter = 0;
    if (lastpress == "equal") {
        clear(bottomDisplay);
        bottomString = "";
    } lastpress = "decimal";
    for (let i = 0; i < bottomString.length; i++) {
        if (bottomString[i] == ".") {
        } else {
            bottomString += ".";
            bottomDisplay.append(".");
        }
    }
});

// operator buttons
const plus = document.getElementById("plus");
plus.addEventListener('click', function () {
    if (bottomString === "") {
    } else {
        moveUp();
        currentOperator.append("+");
        mathFunction = (a, b) => a + b;
    }
});

const minus = document.getElementById("minus");
minus.addEventListener('click', function () {
    if (bottomString === "") {
    } else {
        moveUp();
        currentOperator.append("-");
        mathFunction = (a, b) => a - b;
    }
});

const divide = document.getElementById("divide");
divide.addEventListener('click', function () {
    if (bottomString === "") {
    } else {
        moveUp();
        currentOperator.append("/");
        mathFunction = (a, b) => a / b;
    }
});

const multiply = document.getElementById("multiply");
multiply.addEventListener('click', function () {
    if (bottomString === "") {
    } else {
        moveUp();
        currentOperator.append("x");
        mathFunction = (a, b) => a * b;
    }
});

// equal button
const equal = document.getElementById("equal");
equal.addEventListener('click', function () {
    if ((bottomString === "") || (topString === "")) {
        clear(currentOperator);
        currentOperator.append("ans");
    } else {
        clearDisplay();
        ans = evaulate(topString, bottomString);
        clearStrings();
        bottomDisplay.append(ans);
        lastpress = "equal";
    }
});

// ac button
const ac = document.getElementById("ac");
ac.addEventListener('click', function () {
    clearDisplay();
    clearStrings();
    ans = 0;
});


// functions
function clear(display) {
    display.innerHTML = "";
};

function evaulate(str1, str2) {
    return mathFunction(Number(str1), Number(str2));
};

// this function clears the bottom display+string and moves bottom string 
// to top string. Also clears the displayed operation on screen.
function moveUp() {
    clear(bottomDisplay);
    topDisplay.append(bottomString);
    topString = bottomString;
    bottomString = "";
    clear(currentOperator);
};

// checks last button pressed
function lastPressed() {
if (lastpress == "equal") {
        clear(bottomDisplay);
        bottomString = "";
    } lastpress = "num";
};

// this function simply clears the display not variables
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