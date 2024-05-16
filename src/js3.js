document.querySelector("button#submit").addEventListener("click", submitForm);

function submitForm() {
    let name = document.querySelector("input#name");
    let name1 = document.querySelector("span#name1");
    let name2 = document.querySelector("span#name2");
    name1.textContent = name.value;
    name2.textContent = name.value;

    let number = document.querySelector("select#number");
    let number2 = document.querySelector("span#number2");
    number2.textContent = number.value;

    let date = document.querySelector("input[name='date']:checked").value;
    let date2 = document.querySelector("span#date2");
    date2.textContent = date;

    let area = document.getElementById('info');
    area.style.display = 'block';
}