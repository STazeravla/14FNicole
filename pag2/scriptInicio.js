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
          "<em>" + "Ese día ya es importante... pero por otra razón." + "</em>";
          setTimeout(() => {
            window.location.href = "../pag2/inicio.html";
          }, 3000);
      }

      if (opcion === "B") {
        mensaje.classList.add("opcion-ab");
        mensaje.innerHTML =
          "<em>" + "Ese día también es importante, pero no por nosotros" + "</em>";
          setTimeout(() => {
            window.location.href = "../pag2/inicio.html";
          }, 3000);
      }

      if (opcion === "C") {

        mensaje.innerHTML =
          "<em>" + "Ahí empezó todo." + "</em>";
         setTimeout(() => {
            window.location.href = "../pag3/pag3.html";
         }, 1500);
          
      }

    }, 600);
  });
});
