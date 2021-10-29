document.addEventListener('DOMContentLoaded', function () {
    var siStory = document.querySelector('.si-story');
    siStorytext = document.querySelectorAll('.story-text');
    locationStory = siStory.offsetTop;
    window.addEventListener('scroll', function () {
        var locationScroll = pageYOffset;
        if (locationScroll > locationStory) {
            for (let i = 0; i < siStorytext.length; i++) {
                siStorytext[i].classList.add('scroll');
            }
        }
    }, false)
}, false)