document.addEventListener('DOMContentLoaded', () => {
    const plans = document.querySelectorAll('.plan');
    plans.forEach((plan) => {
        plan.classList.add('visible');
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    setTimeout(function() {
        requestAnimationFrame(function() {
            header.style.opacity = 1;
        });
    }, 100);
});