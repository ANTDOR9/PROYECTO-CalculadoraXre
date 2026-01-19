// =========================
// LOGIN SIMULADO
// =========================

// Credenciales falsas
const USER = "admin";
const PASS = "1234";

// Elementos
const loginForm = document.getElementById("loginForm");
const msg = document.getElementById("loginMsg");

// Login
loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;

    if (user === USER && pass === PASS) {
        localStorage.setItem("logged", "true");
        window.location.href = "index.html";
    } else {
        msg.textContent = "Usuario o contraseña incorrectos";
        msg.style.color = "var(--accent-color)";
    }
});
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("logged");
        window.location.href = "login.html";
    });
}
