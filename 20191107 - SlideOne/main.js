document.addEventListener('DOMContentLoaded', function () {
    var buttonSlide = document.querySelectorAll('.slide ul li');
    var slide = document.querySelectorAll('.block div');
    var auSlide = setInterval(function () {
        autoSlide();
    }, 2000);

    for (var i = 0; i < buttonSlide.length; i++) {
        buttonSlide[i].addEventListener('click', function () {
            clearInterval(auSlide);
            for (var i = 0; i < buttonSlide.length; i++) {
                buttonSlide[i].classList.remove('slide-active');
            }
            this.classList.add('slide-active');
            var buttonActived = this;
            for (var slideLocation = 0; buttonActived = buttonActived.previousElementSibling; slideLocation++) { }
            for (var i = 0; i < slide.length; i++) {
                slide[i].classList.remove('block-active');
            }
            slide[slideLocation].classList.add('block-active');
        })
    }

    function autoSlide() {
        var thisSlide = document.querySelector('.block div.block-active');
        for (var slideLocation = 0; thisSlide = thisSlide.previousElementSibling; slideLocation++) { }
        if (slideLocation < (slide.length - 1)) {
            for (var i = 0; i < slide.length; i++) {
                slide[i].classList.remove('block-active');
                buttonSlide[i].classList.remove('slide-active');
            }
            slide[slideLocation].nextElementSibling.classList.add('block-active');
            buttonSlide[slideLocation].nextElementSibling.classList.add('slide-active');
        } else {
            for (var i = 0; i < slide.length; i++) {
                slide[i].classList.remove('block-active');
                buttonSlide[i].classList.remove('slide-active');
            }
            slide[0].classList.add('block-active');
            buttonSlide[0].classList.add('slide-active');
        }
    }
}, false)
