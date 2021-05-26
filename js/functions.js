"use strict";


/* FUNCTION DECLARATION */
function calc(x, y, sign) {
    if (sign == 'plus') {
        return (x + y);
    } else if (sign == 'minus') {
        return (x - y);
    } else if (sign == 'divide') {
        return (x / y);
    }  else if (sign == 'multiply') {
        return (x * y);
    } else if (sign == 'mod') {
        return (x % y);
    } else {
        return ('Something went wrong');
    }
}

console.log(calc(5, 2, 'multiply'));


/* FUNCTION EXPRESSION */
const dateLog = function() {
    console.log(new Date());
};
dateLog();


/* ARROW FUNCTION */
const modCalculator = (a, b) => a % b;

console.log(modCalculator(15, 2));


/* STRING METHODS */
const str = 'exaMple';
console.log(str);
console.log(str.toLocaleUpperCase());
console.log(str.toLowerCase());


const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit'));
console.log(fruit.indexOf('qq'));


const log = 'Hello world!';
console.log(log.slice(6, 11));
console.log(log.slice(6));
console.log(log.slice(-12, -7));

console.log(log.substring(6, 11));

console.log(log.substr(6, 5));
/* END OF STRING METHODS */



/* NUMBER METHODS */
const num = 12.3;
console.log(Math.round(num));

const testNum = '12.2px';
console.log(parseInt(testNum));
console.log(parseFloat(testNum));
