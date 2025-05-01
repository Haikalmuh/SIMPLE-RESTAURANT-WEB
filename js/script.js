window.addEventListener('scroll', function () {
    const jumbotron = document.querySelector('.jumbotron-content');
    const scrollY = window.scrollY;
    if (scrollY > 50) {
        jumbotron.style.opacity = '0.8';
        jumbotron.style.transform = 'scale(0.98)';
    } else {
        jumbotron.style.opacity = '1';
        jumbotron.style.transform = 'scale(1)';
    }
});
