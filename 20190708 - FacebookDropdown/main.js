document.addEventListener('DOMContentLoaded', function () {
    var iconstatus = document.getElementsByClassName('iconstatus');
    var listgroup = document.getElementsByClassName('list-group');
    for (var i = 0; i < iconstatus.length; i++) {
        iconstatus[i].onclick = function () {
            if (this.classList[1] == 'iconstatus-active') {
                this.classList.remove('iconstatus-active')
                var data_icon = this.getAttribute('data-icon');
                var data_list = document.getElementById(data_icon);
                data_list.classList.remove('showlist');
            } else {
                for (var i = 0; i < iconstatus.length; i++) {
                    iconstatus[i].classList.remove('iconstatus-active')
                }
                this.classList.toggle('iconstatus-active');
                var data_icon = this.getAttribute('data-icon');
                var data_list = document.getElementById(data_icon);
                for (var i = 0; i < listgroup.length; i++) {
                    listgroup[i].classList.remove('showlist');
                }
                data_list.classList.add('showlist');
            } 
        }
    }

}, false)