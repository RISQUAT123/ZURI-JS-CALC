const num1 = parseFloat(prompt('input nr1:'));
const num2 = parseFloat(prompt('input nr2:'));

const operator = prompt('input operator(+, -, /, *');
let result = 0;
if (isNaN(num1) || isNaN(num2)) {
    alert('Wrong Input! Refresh the page and provide detail')
} else {
    if (operator == '+') {
        result = num1 + num2;
    } else if (operator == '-') {
        result = num1 - num2;
    } else if (operator == '/') {
        result = num1 / num2;
    } else if (operator == '*') {
        result = num1 * num2;
    }
    window.alert(num1 + operator + num2 + '=' + result);
}