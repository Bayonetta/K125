function calculate(operation) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result;
    let showResult2 = true;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 != 0) {
                result = num1 / num2;
            } else {
                alert("divisor can't be 0");
                return;
            }
            break;
        case 'compare':
            showResult2 = false;
            result = num1 > num2 ? num1 + " > " + num2 : num1 < num2 ? num1 + " < " + num2 : num1 + " == " + num2;
            break;
    }

    document.getElementById("result").innerHTML = result;


    if (result % 2 === 0 && result % 3 === 0) {
        document.getElementById("result2").innerHTML = result + " can be divided by 2 and 3";
    } else if (result % 2 === 0) {
        document.getElementById("result2").innerHTML = result + " can be divided by 2";
    } else if (result % 3 === 0) {
        document.getElementById("result2").innerHTML = result + " can be divided by 3";
    } else {
        document.getElementById("result2").innerHTML = result + " cannot be divided by 2 or 3";
    }

    if (!showResult2) {
        document.getElementById("result2").innerHTML = "";
    }
}