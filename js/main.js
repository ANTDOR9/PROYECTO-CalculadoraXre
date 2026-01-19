// =========================
// SONIDO DE CLIC
// =========================

// Crear sonido
const clickSound = new Audio("assets/music/click.mp3");
clickSound.volume = 0.4;

// Función para reproducir sonido
function playClickSound() {
    clickSound.currentTime = 0; // reinicia para clics rápidos
    clickSound.play();
}

// Aplicar sonido a botones
const allButtons = document.querySelectorAll("button");

allButtons.forEach(button => {
    button.addEventListener("click", playClickSound);
});
