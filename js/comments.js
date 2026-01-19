// =========================
// SISTEMA DE COMENTARIOS
// =========================

const form = document.getElementById("commentForm");
const commentsList = document.getElementById("commentsList");

// Obtener comentarios guardados
let comments = JSON.parse(localStorage.getItem("comments")) || [];

// Mostrar comentarios
function renderComments() {
    commentsList.innerHTML = "";

    comments.forEach(comment => {
        const div = document.createElement("div");
        div.classList.add("comment");

        div.innerHTML = `
            <h4>${comment.user}</h4>
            <span>${comment.date}</span>
            <p>${comment.text}</p>
        `;

        commentsList.appendChild(div);
    });
}

// Guardar comentario
form.addEventListener("submit", e => {
    e.preventDefault();

    const user = document.getElementById("username").value;
    const text = document.getElementById("commentText").value;

    const newComment = {
        user,
        text,
        date: new Date().toLocaleString()
    };

    comments.unshift(newComment);
    localStorage.setItem("comments", JSON.stringify(comments));

    form.reset();
    renderComments();
});

// Render inicial
renderComments();
