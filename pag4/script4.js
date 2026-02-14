const botones = document.querySelectorAll(".opciones button");
const titulo = document.getElementById("titulo");
const opciones = document.querySelector(".opciones");
const mensaje = document.getElementById("mensaje");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const opcion = boton.dataset.opcion;

    // ocultamos título y botones
    titulo.classList.add("oculto");
    opciones.classList.add("oculto");

    setTimeout(() => {
      mensaje.classList.add("centrado", "visible");

      if (opcion === "A") {
        mensaje.classList.add("opcion-ab");
        mensaje.innerHTML =
          "<em>" + "Es imposible." + "</em>";
          setTimeout(() => {
            window.location.href = "../pag4/pag4.html";
          }, 3000);
      }

      if (opcion === "B") {
        mensaje.classList.add("opcion-ab");
        mensaje.innerHTML =
          "<em>" + "No alcanza." + "</em>";
          setTimeout(() => {
            window.location.href = "../pag4/pag4.html";
          }, 3000);
      }

      if (opcion === "C") {
        mensaje.innerHTML =
          "<em>" + "Es infinito." + "</em>";
        
        setTimeout(() => {
            
        mensaje.innerHTML =
         "<em>" + "Siempre te voy a amar." + "</em>";
          }, 3000);
        
        setTimeout(() => {
            const transition = document.getElementById("transition");

          transition.classList.add("active");
          }, 4000);
          
          
        setTimeout(() => {
            window.location.href = "../pag5/pag5.html";
          }, 6000);
      }

    }, 600);
  });
});

const heartsContainer = document.querySelector(".hearts");

// ❤️ Corazones
function createHeart() {
  const heart = document.createElement("span");
  heart.classList.add("heart");
  heart.innerHTML = "❤";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 6 + Math.random() * 4 + "s";
  heart.style.fontSize = 14 + Math.random() * 10 + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 700);

// ✨ N o N+S
function createMark() {
  const mark = document.createElement("span");
  mark.classList.add("mark");
  mark.innerHTML = "N+S"; // o "N"

  mark.style.left = Math.random() * 100 + "vw";
  mark.style.animationDuration = 8 + Math.random() * 4 + "s";
  mark.style.fontSize = 12 + Math.random() * 8 + "px";

  heartsContainer.appendChild(mark);

  setTimeout(() => {
    mark.remove();
  }, 12000);
}

setInterval(createMark, 800);

