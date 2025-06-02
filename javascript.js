// variables
let ans = 0;
let bottomString = "", topString = "";

// DOM 
const topDisplay = document.getElementById("topDisplay");
const bottomDisplay = document.getElementById("bottomDisplay");
const currentOperator = document.getElementById("operator");

// numeral buttons
const one = document.getElementById("one");
one.addEventListener('click', function() {
    bottomString += "1";
    bottomDisplay.append('1');
});

const two = document.getElementById("two");
two.addEventListener('click', function() {
    bottomString += "2";
    bottomDisplay.append('2');
});

const three = document.getElementById("three");
three.addEventListener('click', function() {
    bottomString += "3";
    bottomDisplay.append('3');
});

const four = document.getElementById("four");
four.addEventListener('click', function() {
    bottomString += "4";
    bottomDisplay.append('4');
});

const five = document.getElementById("five");
five.addEventListener('click', function() {
    bottomString += "5";
    bottomDisplay.append('5');
});

const six = document.getElementById("six");
six.addEventListener('click', function() {
    bottomString += "6";
    bottomDisplay.append('6');
});

const seven = document.getElementById("seven");
seven.addEventListener('click', function() {
    bottomString += "7";
    bottomDisplay.append('7');
});

const eight = document.getElementById("eight");
eight.addEventListener('click', function() {
    bottomString += "8";
    bottomDisplay.append('8');
});

const nine = document.getElementById("nine");
nine.addEventListener('click', function() {
    bottomString += "9";
    bottomDisplay.append('9');
});

const zero = document.getElementById("zero");
zero.addEventListener('click', function() {
    if (bottomString === "0") {
    } else {
        bottomDisplay.append('0');
    }
});

// operator buttons
const plus = document.getElementById("plus");
plus.addEventListener('click', function() {
    if (bottomString === "") {
    } else {
        clear(bottomDisplay);
        topDisplay.append(bottomString, "+");
    }
});

const minus = document.getElementById("minus");
minus.addEventListener('click', function() {
    if (bottomString === "") {
    } else {
        clear(bottomDisplay);
        topDisplay.append(bottomString, "-");
    }
});

const divide = document.getElementById("divide");
divide.addEventListener('click', function() {
    if (bottomString === "") {
    } else {
        clear(bottomDisplay);
        topDisplay.append(bottomString, "/");
    }
});

const multiply = document.getElementById("multiply");
minus.addEventListener('click', function() {
    if (bottomString === "") {
    } else {
        clear(bottomDisplay);
        topDisplay.append(bottomString, "x");
    }
});

const equal = document.getElementById("equal");
equal.addEventListener('click', function() {
    if (bottomString === "") {
    } else {
        clear(topDisplay);
        clear(bottomDisplay);
        bottomDisplay.append(ans);
    }
});

// ac button
const ac = document.getElementById("ac");
ac.addEventListener('click', function() {
    clear(topDisplay);
    clear(bottomDisplay);
    ans = 0;
});


// functions
function clear(display) {
    display.innerHTML = "";
}

function evaulate(str1, str2) {
    let firstNumber = Number(str1);
    let secondNumber = Number(str2);
    let operator = str1[str1.length-1];
}

