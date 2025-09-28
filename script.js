// 💜 Corazones animados (solo en index.html)
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");
  corazon.innerHTML = "💜";
  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.animationDuration = (Math.random() * 3 + 3) + "s";
  document.body.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 6000);
}

if (document.title.includes("Aniversario")) {
  setInterval(crearCorazon, 500);

  // 🎶 Reproducir música con clic
  window.addEventListener("click", () => {
    const musica = document.getElementById("musica");
    if (musica) musica.play();
  });
}

// 💌 Abrir carta (en carta.html)
function abrirCarta() {
  const carta = document.querySelector(".carta");
  carta.classList.toggle("abierta");
}

// 📸 Mensajes de las fotos (modal en index.html)
const fotos = document.querySelectorAll(".foto");
const modal = document.getElementById("modal");
const mensaje = document.getElementById("mensaje");
const cerrar = document.getElementById("cerrar");

// Solo activar si existen fotos y modal
if (fotos.length > 0 && modal) {
  fotos.forEach(foto => {
    foto.addEventListener("click", () => {
      mensaje.textContent = foto.dataset.mensaje;
      modal.style.display = "flex";
    });
  });

  // Cerrar modal
  cerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}
