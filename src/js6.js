var array = ["石川", "東京", "富山"];

function displayContent() {
    var index = parseFloat(document.getElementById("input").value);
    var output = document.getElementById("output");

    if (index >= 0 && index < array.length) {
        output.innerHTML = array[index];
    } else {
        output.innerHTML = "Invaild index";
    }
}

function addContent() {
    var content = document.getElementById("input").value;

    if (content !== "") {
        array.push(content);
        document.getElementById("output").innerHTML = "size:" + array.length;
    } else {
        document.getElementById("output").innerHTML = "Please input something";
    }
}

function deleteContent() {
    var index = array.length - 1;

    if (index >= 0 && index < array.length) {
        array.pop();
        output.innerHTML = "size: " + array.length;
    } else {
        output.innerHTML = "Error";
    }
}