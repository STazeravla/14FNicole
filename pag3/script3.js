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
          "<em>" + "Tiene alas" + "</em>";
          setTimeout(() => {
            window.location.href = "../pag3/pag3.html";
          }, 3000);
      }

      if (opcion === "B") {
        
        mensaje.innerHTML =
          "<em>" + "12" + "</em>";
          setTimeout(() => {
            window.location.href = "../pag4/pag4.html";
          }, 3000);
      }

      if (opcion === "C") {
        mensaje.classList.add("opcion-ab");
        mensaje.innerHTML =
          "<em>" + "Está enojado" + "</em>";
        
        setTimeout(() => {
            window.location.href = "../pag3/pag3.html";
          }, 3000);
      }

    }, 600);
  });
});