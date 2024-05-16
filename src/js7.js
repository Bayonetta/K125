document.querySelector("button#submit").addEventListener("click", submitForm);
document.getElementById('number').addEventListener('change', changeNumber);


function changeNumber() {
    var number = this.value;
    for (var i = 1; i <= 5; i++) {
        var input = document.getElementById('name' + i);
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
    name1.textContent = name.value;
    name2.textContent = name.value;

    let number = document.querySelector("select#number");
    let number2 = document.querySelector("span#number2");
    number2.textContent = number.value;

    var datesContent = "";
    let dates = document.querySelectorAll("input[name='date']");
    for (let i = 0; i < dates.length; i++) {
        if (dates[i].checked) {
            datesContent += dates[i].value + ", ";
        }
    }
    let date2 = document.querySelector("span#date2");
    date2.textContent = datesContent;

    let area = document.getElementById('info');
    area.style.display = 'block';
}