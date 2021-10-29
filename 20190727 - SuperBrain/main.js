var numberRandom = document.querySelector('.number-random');
seeResult = document.querySelector('.see-result');
numberAll = document.querySelector('.number-all');

clearRandom = 0;
timeRandom = 7000 / 15;

var boardRandom = setInterval(function () {
    if (Math.random() < 0.5) {
        numberNegative = Math.floor((Math.random() * 1001) - 1000);
        if (numberNegative > -100) {
            numberNegative += -100;
        }
        numberAll.innerText += numberNegative;
        numberRandom.innerText = numberNegative;
    } else {
        numberPositive = Math.floor(Math.random() * 1001);
        if (numberPositive < 100) {
            numberPositive += 100;
        }
        if (numberAll.innerText == '') {
            numberAll.innerText += numberPositive;
        } else {
            numberAll.innerText += '+' + numberPositive;
        }
        numberRandom.innerText = numberPositive;
    }
    clearRandom += 1;
    if (clearRandom == 15) {
        clearInterval(boardRandom);
        seeResult.classList.add('show-see-result');
    }
}, timeRandom)
timeOutNumber = setTimeout(function(){
    numberRandom.innerText = '';
},7500)



var numberResult = document.querySelector('.number-result');
function showReSult() {
    numberAll.classList.add('show-number-all');
    numberResult.innerText = eval(numberAll.innerText);
}




var numberTime = document.querySelector('.number-time');
var timeCountDown = 6;
numberTime.innerText = timeCountDown.toFixed(2);
function countDown() {
    timeOut = setTimeout(function () {
        timeCountDown -= 0.01;
        countDown();
        numberTime.innerText = timeCountDown.toFixed(2);
        if (timeCountDown <= 0.1) {
            clearTimeout(timeOut);
            numberTime.innerText = 'Hết Giờ';
            return false;
        }
    }, 10);
}
countDown();