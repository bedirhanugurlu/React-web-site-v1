
document.querySelector(window).scroll(function () {
    if (window.querySelector(document).scrollTop > 100) {
        window.querySelector('nav').classList.add('.nav-up');
    } else {
        window.querySelector('nav').classList.remove('.nav-up');
    }
});
