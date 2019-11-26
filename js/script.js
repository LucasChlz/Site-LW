const target = document.querySelectorAll('[anime-op]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + 500;
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass)
        }
        console.log(element.offsetTop)
    })
}  

window.addEventListener('load', function() {
    animeScroll()
    lnAnimate()
})

const ln = document.querySelectorAll('[anime-ln]');
const lnClass = 'animateln';

function lnAnimate() {
    const windowTop = window.pageYOffset + 500;
    ln.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(lnClass)
        }
        console.log(element.offsetTop)
    })
}  
