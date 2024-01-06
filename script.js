// JavaScript can be used to dynamically load gallery images or handle form submissions
// Example: Load images for the gallery

function scrollToElement(elementId, duration) {
    const element = document.getElementById(elementId);
    let startingY = window.pageYOffset;
    let elementY = window.pageYOffset + element.getBoundingClientRect().top;
    let targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY;
    let diff = targetY - startingY;
    let easing = function(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t };
    let start;

    if (!diff) return;

    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        let time = timestamp - start;
        let percent = Math.min(time / duration, 1);
        percent = easing(percent);

        window.scrollTo(0, startingY + diff * percent);

        if (time < duration) {
            window.requestAnimationFrame(step);
        }
    });
}

document.getElementById('scrollToContact').addEventListener('click', function(e) {
    e.preventDefault();
    scrollToElement('contact', 3000); // 1000ms for the scroll duration
});

document.addEventListener('click', function(event) {
    var isClickInsideNavbar = document.querySelector('.navbar').contains(event.target);
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapsed = document.querySelector('#navbarNav').classList.contains('show');

    if (!isClickInsideNavbar && navbarCollapsed && navbarToggler) {
        navbarToggler.click();
    }
});
