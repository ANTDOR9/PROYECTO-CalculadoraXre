# 🌐 Proyecto Frontend Interactivo

Proyecto web desarrollado **100% en frontend** utilizando **HTML, CSS y JavaScript puro**, enfocado en una experiencia visual moderna, interactiva y bien estructurada.

Este proyecto está pensado como:
- Portafolio personal
- Proyecto demostrativo
- Práctica avanzada de frontend sin backend

---

## ✨ Características principales

- 🎨 Diseño moderno con estilo oscuro
- ✨ Animaciones suaves al hacer scroll (IntersectionObserver)
- 🎵 Música de fondo con control play / pause
- 🔊 Efectos de sonido al hacer clic
- 💬 Sistema de comentarios (guardados en localStorage)
- 🔐 Login simulado (solo frontend)
- 📁 Estructura de carpetas profesional
- ⚙️ JavaScript separado por responsabilidades

---

## 🧰 Tecnologías utilizadas

- **HTML5**
- **CSS3**
  - Flexbox
  - Variables CSS
  - Animaciones y transiciones
- **JavaScript Vanilla**
  - localStorage
  - IntersectionObserver
  - Manipulación del DOM

> ⚠️ No se utiliza backend ni base de datos real.

---


## 📂 Estructura del proyecto
```js
frontend-web/
│
├── index.html
├── login.html
│
├── css/
│ ├── main.css
│ ├── layout.css
│ ├── buttons.css
│ └── animations.css
│
├── js/
│ ├── main.js
│ ├── music.js
│ ├── comments.js
│ └── auth.js
│
├── assets/
│ ├── images/
│ │ ├── 1.png
│ │ ├── 2.png
│ │ └── bg.jpg
│ │
│ └── music/
│ ├── theme.mp3
│ └── click.mp3
│
└── README.md
```
---
## 🔐 Acceso / Login (IMPORTANTE)

Este proyecto incluye un **login simulado** solo para fines frontend.

### 👉 Credenciales por defecto

Usuario: admin
Contraseña: 1234

yaml
Copiar código

📌 Estas credenciales están definidas directamente en el archivo:

js/auth.js

cpp
Copiar código

```js
const USER = "admin";
const PASS = "1234";
Si cambias estos valores, recuerda actualizarlos también aquí en el README para no olvidarlos.
```
⚠️ Nota sobre seguridad
```
El login NO es seguro
No hay encriptación
No hay backend
No hay validación real de usuarios

✔ Esto es intencional, ya que el proyecto es 100% frontend.
```
💬 Sistema de comentarios
```
Los comentarios se guardan usando localStorage
Persisten al recargar la página
Solo son visibles en el mismo navegador
```
📌 No se comparten entre usuarios ni dispositivos.

🎵 Música y sonidos
```
Música de fondo controlada por botón
Sonidos al hacer clic en botones
El navegador requiere interacción del usuario para reproducir audio
```
🚀 Cómo ejecutar el proyecto
```
Clona o descarga el proyecto
Abre login.html en el navegador
Inicia sesión con:
admin / 1234
Accede al sitio principal
No requiere servidor ni instalación adicional.
```
📌 Posibles mejoras futuras
```
Modo oscuro / claro
Diseño responsive para móviles
Comentarios con avatar
Sistema de likes
Backend real (Node.js, Firebase, etc.)
```
👤 Autor
Proyecto desarrollado como práctica y demostración de frontend moderno.

📄 Licencia
Proyecto de uso libre con fines educativos y de portafolio.



---

## ✅ CONSEJO FINAL (MUY IMPORTANTE)

👉 **No borres este README**  
👉 Si cambias usuario o contraseña, **actualízalo aquí**  
👉 Esto es lo que evita quedarte “varado” dentro de 6 meses

---

Si quieres, el siguiente paso puede ser:
- 🧼 **Limpieza final del código**
- 📱 **Responsive para móviles**
- 🌙 **Modo oscuro / claro**

Dime y lo hacemos 👌
