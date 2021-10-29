var inputCal = document.querySelector('.inputcal');
    answer = document.querySelector('.answer');
    number = document.getElementsByClassName('number');
valueAll = 0;
value = 0;
for (let i = 0; i < number.length; i++) {
    number[i].onclick = function () {
        var valueButton = this.innerText;
        var value = parseFloat(valueButton, 10);
        inputCal.innerText += value;
    }
}
var plus = document.querySelector('.plus');
plus.onclick = function () {
    var value = this.innerText;
    inputCal.innerText += value;
}
var minus = document.querySelector('.minus');
minus.onclick = function () {
    var value = this.innerText;
    inputCal.innerText += value;
}
var multiply = document.querySelector('.multiply');
multiply.onclick = function () {
    var value = this.innerText;
    inputCal.innerText += value;
}
var divide = document.querySelector('.divide');
divide.onclick = function () {
    var value = this.innerText;
    inputCal.innerText += value;
}
var dot = document.querySelector('.dot');
dot.onclick = function () {
    var value = this.innerText;
    inputCal.innerText += value;
}
var percent = document.querySelector('.percent');
percent.onclick = function () {
    var value = this.innerText;
    inputCal.innerText += value;
}
var equal = document.querySelector('.equal');
equal.onclick = function () {
    var calculate = inputCal.innerText;
    answer.innerText = eval(calculate);
}
var deletes = document.querySelector('.delete');
deletes.onclick = function () {
    var lengthInput = inputCal.innerText.length;
    deleteInput = lengthInput - 1;
    inputCal.innerText = inputCal.innerText.substring(0, deleteInput);
}
var deleteAll = document.querySelector('.deleteAll');
deleteAll.onclick = function () {
    inputCal.innerText = '';
    answer.innerText = '';
}