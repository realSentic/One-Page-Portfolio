const gameBtn = document.getElementById("game");
const animeBtn = document.getElementById("anime");
const musicBtn = document.getElementById("music");

const gameShow = document.getElementById("gameshow");
const animeShow = document.getElementById("animeshow");
const musicShow = document.getElementById("musicshow");

const allShows = [gameShow, animeShow, musicShow];

function showDisplay(containerToShow) {

    allShows.forEach(show => {
        show.style.display = "none";
        show.classList.remove("animate__animated", "animate__fadeIn");
    });

    containerToShow.style.display = "flex";

    containerToShow.style.animationDuration = "0.2s";

    containerToShow.classList.add("animate__animated", "animate__fadeIn");
}

gameBtn.addEventListener("click", () => showDisplay(gameShow));
animeBtn.addEventListener("click", () => showDisplay(animeShow));
musicBtn.addEventListener("click", () => showDisplay(musicShow));

allShows.forEach(modal => {
    const content = modal.querySelector(".hb-content");

    modal.addEventListener("click", () => {
        modal.classList.remove("animate__zoomIn");
        modal.classList.add("animate__fadeOut");

        modal.addEventListener('animationend', function handleEnd() {
            modal.style.display = "none";
            modal.classList.remove("animate__animated", "animate__fadeOut");
            modal.removeEventListener('animationend', handleEnd);
        });
    });

    content.addEventListener("click", (e) => e.stopPropagation());
});
