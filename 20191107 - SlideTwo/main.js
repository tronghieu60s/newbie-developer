document.addEventListener('DOMContentLoaded',function(){
    var switchLeft = document.querySelector('.switch-left');
        switchRight = document.querySelector('.switch-right');
        slide = document.querySelectorAll('.aslide');
        locationFirst = 0;
        numberSlide = slide.length;
    switchLeft.addEventListener('click',function(){
        slideNow = slide[locationFirst];
        if(locationFirst != 0){
            locationFirst = locationFirst - 1;
        }else{
            locationFirst = numberSlide -1;
        }
        var slideNext = slide[locationFirst];
        for (var i = 0; i < slide.length; i++) {
            slide[i].classList.remove('showNext');
            slide[i].classList.remove('hideNext');
        }
        slideNow.classList.add('hideNext');
        slideNext.classList.add('showNext');
    })
    switchRight.addEventListener('click',function(){
        slideNow = slide[locationFirst];
        if(locationFirst < numberSlide -1){
            locationFirst = locationFirst + 1;
        }else{
            locationFirst = 0;
        }
        var slideNext = slide[locationFirst];
        for (var i = 0; i < slide.length; i++) {
            slide[i].classList.remove('showNext');
            slide[i].classList.remove('hideNext');
        }
        slideNow.classList.add('hideNext');
        slideNext.classList.add('showNext');
        
    })

},false)