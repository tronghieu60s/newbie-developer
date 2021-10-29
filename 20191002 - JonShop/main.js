//Slide Menu Cart
var slideProduct = document.getElementsByClassName('mn__slide-product');
for (let i = 0; i < slideProduct.length; i++) {
    let children = slideProduct[i].children;
    for (let j = 0; j < children.length; j++) {
        if (children[j].getAttribute('class') == 'mn__slide-product-select') {
            slideProduct[i].addEventListener('mouseover', function () {
                children[j].classList.add('mn__show', 'mn__slide-product-select-show');
            })
            slideProduct[i].addEventListener('mouseout', function () {
                children[j].classList.remove('mn__show', 'mn__slide-product-select-show');
            })
        }
    }
}
//End

//Slide Change Tab
var slideTopTitle = document.getElementsByClassName('mn__slide-top-title');
for (let i = 0; i < slideTopTitle.length; i++) {
    slideTopTitle[i].addEventListener('click', function () {
        for (let i = 0; i < slideTopTitle.length; i++) {
            slideTopTitle[i].classList.remove('active');
        }
        this.classList.add('active');
    })
}
//End

//Dropdown Topbar
var TopbarDropdownHover = document.querySelectorAll('.hd__topbar-right .dropdown');
for (let i = 0; i < TopbarDropdownHover.length; i++) {
    let children = TopbarDropdownHover[i].children;
    for (let j = 0; j < children.length; j++) {
        if (children[j].getAttribute('class') == 'dropdown-menu') {
            TopbarDropdownHover[i].addEventListener('mouseover', function () {
                this.classList.add('show');
                children[j].classList.add('show');
            })
            TopbarDropdownHover[i].addEventListener('mouseout', function () {
                this.classList.remove('show');
                children[j].classList.remove('show');
            })
        }
    }
}
//End

//Fixed Menu
var mainMenu = document.querySelector('.hd__menu');
mainMenuStatus = 'block';
window.addEventListener('scroll', function () {
    if (mainMenu.offsetTop <= this.pageYOffset) {
        if (mainMenuStatus == 'block') {
            mainMenu.classList.add('hd__fixedmenu');
            mainMenuStatus = 'fixed';
        }
    }
    if (mainMenu.offsetTop >= this.pageYOffset) {
        if (mainMenuStatus == 'fixed') {
            mainMenu.classList.remove('hd__fixedmenu');
            mainMenuStatus = 'block';
        }
    }
})
// End Fixed Menu

//Backtotop
var backtop = document.querySelector('.ft__backtop');
window.addEventListener('scroll',function(){
    if(window.pageYOffset > 400){
        backtop.style.opacity = 1;
    }else{
        backtop.style.opacity = 0;
    }
})
backtop.addEventListener('click',function(){
    document.documentElement.scrollTop = 0;
})