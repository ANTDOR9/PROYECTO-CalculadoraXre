// =========================
// CONTROL DE MÚSICA
// =========================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

// Click en botón
musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
        music.play();
        music.volume = 0.5; // volumen suave
        musicBtn.textContent = "Pausar Música";
        isPlaying = true;
    } else {
        music.pause();
        musicBtn.textContent = "Reproducir Música";
        isPlaying = false;
    }
});
