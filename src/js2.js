function changeText() {
    // 获取元素
    var nameElement = document.getElementById('name');
    var inputElement = document.getElementById('input');
    var instElement = document.getElementById('inst');

    // 修改元素的文本
    inputElement.textContent = nameElement.textContent;
    instElement.textContent = 'This is my JS2 file.';
}