const info = document.getElementById("hover-info");
const hero = document.getElementById("hover-hero");

hero.addEventListener("mouseenter", () => {
    hero.classList.add("animate__animated", "animate__shakeX");
});

hero.addEventListener("animationend", () => {
    hero.classList.remove("animate__animated", "animate__shakeX");
});

info.addEventListener('mouseenter', () => {
    info.classList.add('animate__animated', 'animate__rubberBand');
});

info.addEventListener('animationend', () => {
    info.classList.remove('animate__animated', 'animate__rubberBand');
});
