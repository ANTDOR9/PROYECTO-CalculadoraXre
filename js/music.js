// =========================
// CONTROL DE MÚSICA
// =========================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
        music.play();
        musicBtn.textContent = "⏸ Pausar música";
    } else {
        music.pause();
        musicBtn.textContent = "▶ Música";
    }
    isPlaying = !isPlaying;
});
