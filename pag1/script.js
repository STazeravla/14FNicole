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
          "<em>" + "Eso sería demasiado poco para todo lo que somos." + "</em>";
          setTimeout(() => {
            window.location.href = "index.html";
          }, 3000);
      }

      if (opcion === "B") {
        mensaje.classList.add("opcion-ab");
        mensaje.innerHTML =
          "<em>" + "Un año es tiempo… pero lo nuestro no se mide así." + "</em>";
          setTimeout(() => {
            window.location.href = "index.html";
          }, 3000);
      }

      if (opcion === "C") {
        mensaje.innerHTML = "<em>" + "Y mucho más…" + "</em>";

        // acá aparece el fondo romántico

        setTimeout(() => {
          document.body.classList.add("romance");
        }, 500);    
        // acá luego insertás o mostrás el contenido real
        // redirigir a inicio.html después de 3 segundos
         setTimeout(() => {
            window.location.href = "../pag2/inicio.html";
         }, 3000);
          
      }

    }, 600);
  });
});
