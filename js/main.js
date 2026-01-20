
// =========================
// PROTECCIÓN DE SESIÓN
// =========================

if (localStorage.getItem("logged") !== "true") {
    window.location.href = "login.html";
}



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






// ================================
// REVEAL ON SCROLL
// ================================
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.2
});

reveals.forEach(reveal => {
    observer.observe(reveal);
});
