var nav = document.getElementById('nav');
var altura = nav.offsetTop;
window.addEventListener('scroll', function(){
    if (window.pageYOffset > altura) {
    nav.classList.add('fixed');
    } else {
    nav.classList.remove('fixed');
    }
})



