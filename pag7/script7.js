const container = document.querySelector(".floating-branches");

function createBranch() {
  const b = document.createElement("span");
  b.className = "branch";
  b.innerHTML = "🌿"; // o 🍃 o 🌸

  b.style.left = Math.random() * 100 + "vw";
  b.style.animationDuration = 10 + Math.random() * 10 + "s";
  b.style.fontSize = 16 + Math.random() * 20 + "px";

  container.appendChild(b);

  setTimeout(() => b.remove(), 20000);
}

setInterval(createBranch, 1500);
