window.onload = function() {
    document.getElementById('execute-countdown').addEventListener('click', function() {
        var countdownValue = document.getElementById('countdown').value;
        var countdownResult = document.getElementById('countdown-result');
        var output = '';
        for (var i = countdownValue; i > 0; i--) {
            output += i + ' ';
        }
        countdownResult.innerText = output;
    });

    document.getElementById('execute-odds').addEventListener('click', function() {
        var start = parseFloat(document.getElementById('start').value);
        var end = parseFloat(document.getElementById('end').value);
        var oddsSum = 0;
        var evensSum = 0;
        var oddsCount = 0;
        var evensCount = 0;
        for (var i = start; i <= end; i++) {
            if (i % 2 === 0) {
                evensSum += i;
                evensCount++;
            } else {
                oddsSum += i;
                oddsCount++;
            }
        }
        document.getElementById('odds-sum').innerText = oddsSum;
        document.getElementById('odds-avg').innerText = evensSum / evensCount;
    });

    var multiplyList = document.getElementById('multiply-list');
    var output = '';
    for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <= 9; j++) {
            output += i + ' x ' + j + ' = ' + i * j + '<br>';
        }
        output += '<br>';
    }
    multiplyList.innerHTML = output;
};