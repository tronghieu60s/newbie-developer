document.addEventListener('DOMContentLoaded',function(){
    var button = document.querySelector('.btn'),
        contentblack = document.querySelector('.contentblack');
        content = document.querySelector('.content');
        contentwhite = document.querySelector('.contentwhite');
    button.onclick = function(){
        contentblack.classList.add('showcontentblack');
        content.classList.add('showmenu');
        contentwhite.classList.add('xoay');
    }
    contentblack.onclick = function(){
        contentblack.classList.remove('showcontentblack');
        content.classList.remove('showmenu');
        contentwhite.classList.remove('xoay');
    }
    
},false)