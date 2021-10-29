document.addEventListener('DOMContentLoaded', function () {
    var menu = document.querySelector('.menu');
    vtmenu = menu.offsetTop;
    statusmenu = 'down100';
    statusstt = 'downfixed';
    fixed = document.querySelector('.fixed')
    vtfixed = fixed.offsetTop;
    stopfixed = vtfixed + 800;

    window.addEventListener('scroll', function () {
        if (this.pageYOffset > vtmenu) {
            if (statusmenu == 'down100') {
                menu.classList.add('menuscroll');
                statusmenu = 'up100';
            }
        } else if (this.pageYOffset <= vtmenu) {
            if (statusmenu == 'up100') {
                menu.classList.remove('menuscroll');
                statusmenu = 'down100';
            }
        }
        if ((this.pageYOffset > vtfixed) && (this.pageYOffset < stopfixed)){
            if (statusstt == 'downfixed') {
                fixed.classList.add('vtfixed');
                statusstt = 'upfixed';
            }
        } else if ((this.pageYOffset <= vtfixed) ||(this.pageYOffset > stopfixed)) {
            if (statusstt == 'upfixed') {
                fixed.classList.remove('vtfixed');
                statusstt = 'downfixed';
            }
        }
    })

}, false)