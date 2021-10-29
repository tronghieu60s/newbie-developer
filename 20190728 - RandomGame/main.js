var blockNumber = document.getElementsByClassName('block-number');
function haha(){
    var x = Math.floor(Math.random() * 101);
    blockNumber[x].innerText = Math.floor(Math.random() * 10);
}
var y = setInterval(function(){
    haha();
},10)
var z = setTimeout(function(){
    clearInterval(y);
},10000)


for (let i = 0; i < blockNumber.length; i++) {
    blockNumber[i].onclick = function(){
        var g = blockNumber[i].innerText;
        for (let j = 0; j < blockNumber.length; j++) {
            if (blockNumber[j].innerText == g) {
                blockNumber[j].innerText = ''
            }
        }
    }
}
