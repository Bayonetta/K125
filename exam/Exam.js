let input1 = document.getElementById('input_q1');
let input2 = document.getElementById('input_q2');
let input3 = document.getElementById('input_q3');

let result1 = document.getElementById('result_q1');
let result2 = document.getElementById('result_q2');
let result3 = document.getElementById('result_q3');

let inputs_q1 = [];
let inputs_q2 = [];

// question1
function append_q1() {
    inputs_q1.push(parseFloat(input1.value));
    input1.value = '';
}

function show_q1() {
    if (inputs_q1.length == 0) {
        alert("No element in the array");
        return;
    }

    var result = '';
    for (let i = 0; i < inputs_q1.length; i++) {
        result += inputs_q1[i] + '-';
    }
    if (inputs_q1.length > 1) {
        for (let i = inputs_q1.length - 2; i >= 0; i--) {
            result += inputs_q1[i] + '-';
        }
    }
    result = result.substring(0, result.length - 1);
    result1.textContent = result;
}

// question2

function append_q2() {
    inputs_q2.push(parseFloat(input2.value));
    input2.value = '';
}

function show_q2() {
    if (inputs_q2.length == 0) {
        alert("No element in the array");
        return;
    } else if (inputs_q2.length == 1) {
        alert("Only one element in the array");
        return;
    }

    inputs_q2.sort(function(a, b) {
        return a - b;
    });
    result2.textContent = inputs_q2[inputs_q2.length - 2];
}

// question3

function check() {

    if (input3.value == "") {
        alert("Please enter a number");
        input3.value = '';
        return;
    }

    let number = parseFloat(input3.value);
    if (number <= 0) {
        alert("Please enter a positive number");
        return;
    }

    if (number < 2) {
        result3.textContent = "false";
        return;
    }
    if (number % 2 == 0) {
        result3.textContent = number == 2 ? "true" : "false";
        return;
    }
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i == 0) {
            result3.textContent = "false";
            return;
        }
    }
    result3.textContent = "true";
    return;
}