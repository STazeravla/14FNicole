const btnSi = document.getElementById('btnSi');
const btnNo = document.getElementById('btnNo');
let contadorClicks = 0;

btnNo.addEventListener('click', function() {
  contadorClicks++;
  
  // Remover todas las clases anteriores
  btnSi.className = 'btn btn-si';
  btnNo.className = 'btn btn-no';
  
  // Agrandar el botón Sí y reducir el No según el contador
  if (contadorClicks === 1) {
    btnSi.classList.add('agrandado-1');
    btnNo.classList.add('reducido-1');
    btnNo.textContent = '¿Segura...? 🥺';
  } else if (contadorClicks === 2) {
    btnSi.classList.add('agrandado-2');
    btnNo.classList.add('reducido-2');
    btnNo.textContent = 'Pensalo bien...';
  } else if (contadorClicks === 3) {
    btnSi.classList.add('agrandado-3');
    btnNo.classList.add('reducido-3');
    btnNo.textContent = '¡Decí que si!';
  } else if (contadorClicks === 4) {
    btnSi.classList.add('agrandado-4');
    btnNo.classList.add('reducido-4');
    btnNo.textContent = '😠';
    } else if (contadorClicks == 5) {
    btnSi.classList.add('agrandado-5');
    btnNo.classList.add('reducido-5');
    btnNo.textContent = '¡Última oportunidad!';
  } else if (contadorClicks == 6) {
    btnSi.classList.add('agrandado-6');
    btnNo.classList.add('reducido-6');
    btnNo.textContent = '....';
  } else {
    // Para cualquier click después del 6to, mantener el máximo tamaño
    btnSi.classList.add('agrandado-6');
    btnNo.classList.add('reducido-6');
  }
});

btnSi.addEventListener('click', function() {
  alert('Te amo ❤️');
  window.location.href = "../pag2/inicio.html";
});
