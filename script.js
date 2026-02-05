function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 80 + 10) + "%";
  elm.style.left = Math.floor(Math.random() * 80 + 10) + "%";
}

const moveRandom = document.querySelector("#move-random");

if (moveRandom) {
  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });
}

// Function to create floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  heart.style.bottom = "-5vh";
  heart.style.zIndex = "1";
  heart.style.opacity = Math.random();
  heart.style.transition = "transform 5s linear, opacity 5s linear";
  
  document.body.appendChild(heart);

  // Animate upwards
  setTimeout(() => {
    heart.style.transform = `translateY(-105vh) translateX(${Math.random() * 100 - 50}px)`;
    heart.style.opacity = "0";
  }, 100);

  // Remove heart after animation
  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// Start generating hearts
setInterval(createHeart, 400);
