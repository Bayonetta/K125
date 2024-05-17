document.querySelector("button#submit").addEventListener("click", submitForm);
document.getElementById('number').addEventListener('change', changeNumber);


function changeNumber() {
    var number = this.value;
    if (number == null) {
        number = 1;
    }
    for (var i = 1; i <= 5; i++) {
        var input = document.getElementById('name-input' + i);
        if (i <= number) {
            input.style.display = 'block';
        } else {
            input.style.display = 'none';
        }
    }
}

function submitForm() {
    let name = document.querySelector("input#name");
    let name1 = document.querySelector("span#name1");
    let name2 = document.querySelector("span#name2");
    let wholeNames = document.querySelector("span#whole-names");
    name1.textContent = name.value;
    name2.textContent = name.value;

    let number = document.querySelector("select#number");
    let number2 = document.querySelector("span#number2");

    number2.textContent = number.value;

    var namesContent = "";
    let names = document.querySelectorAll("input[name='names']");
    for (let i = 0; i < number.value; i++) {
        if (i == number.value - 1) {
            namesContent += names[i].value;
        } else {
            namesContent += names[i].value + ", ";
        }
    }
    wholeNames.textContent = namesContent;

    var datesContent = "";
    let dates = document.querySelectorAll("input[name='date']");
    for (let i = 0; i < dates.length; i++) {
        if (dates[i].checked) {
            datesContent += dates[i].value + "       ";
        }
    }
    let date2 = document.querySelector("span#date2");
    date2.textContent = datesContent;

    let area = document.getElementById('info');
    area.style.display = 'block';
}

changeNumber();