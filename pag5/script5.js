const checkbox = document.querySelector(".checkbox");
const flood = document.querySelector(".heart-flood");

checkbox.addEventListener("click", () => {
  startHeartFlood();
});

function startHeartFlood() {
  let count = 0;

  const interval = setInterval(() => {
    for (let i = 0; i < 8; i++) {
      createFloodHeart();
    }
    count++;

    if (count > 12) {
      clearInterval(interval);
      setTimeout(() => {
            window.location.href = "../pag6/pag6.html";
          }, 200);
    }
  }, 150);
}

function createFloodHeart() {
  const h = document.createElement("span");
  h.classList.add("flood-heart");
  h.innerHTML = "❤";

  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 6000 + Math.random() * 80 + "px";
  h.style.animationDuration = 1.2 + Math.random() * 0.8 + "s";

  flood.appendChild(h);

  //setTimeout(() => {
  //  h.remove();
  //}, 3000);
}

function createFloodHeart() {
  const h = document.createElement("span");
  h.classList.add("flood-heart");
  h.innerHTML = "❤";

  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 20 + Math.random() * 100 + "px";
  h.style.animationDuration = 1.2 + Math.random() * 0.8 + "s";

  flood.appendChild(h);

  //setTimeout(() => {
  //  h.remove();
  //}, 3000);
}

function createFloodHeart() {
  const h = document.createElement("span");
  h.classList.add("flood-heart");
  h.innerHTML = "❤";

  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 20 + Math.random() * 80 + "px";
  h.style.animationDuration = 1.2 + Math.random() * 0.8 + "s";

  flood.appendChild(h);

  //setTimeout(() => {
  //  h.remove();
  //}, 3000);
}
