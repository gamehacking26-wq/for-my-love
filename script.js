function moveRandomEl(elm) {
  const btnWidth = elm.offsetWidth;
  const btnHeight = elm.offsetHeight;
  
  // Safe area calculate karna taaki screen se bahar na jaye
  const maxX = window.innerWidth - btnWidth - 20;
  const maxY = window.innerHeight - btnHeight - 20;

  const randomX = Math.max(10, Math.floor(Math.random() * maxX));
  const randomY = Math.max(10, Math.floor(Math.random() * maxY));

  elm.style.position = "fixed";
  elm.style.left = randomX + "px";
  elm.style.top = randomY + "px";
}

const moveRandom = document.querySelector("#move-random");

if (moveRandom) {
  // Desktop ke liye
  moveRandom.addEventListener("mouseenter", (e) => moveRandomEl(e.target));
  
  // Mobile ke liye (Touch karte hi bhagega)
  moveRandom.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Click hone se rokta hai
    moveRandomEl(e.target);
  });
}

// Background Hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 15 + 15 + "px";
  heart.style.bottom = "-5vh";
  heart.style.zIndex = "1";
  heart.style.pointerEvents = "none";
  document.body.appendChild(heart);

  const anim = heart.animate([
    { transform: 'translateY(0)', opacity: 1 },
    { transform: `translateY(-105vh) translateX(${Math.random() * 40 - 20}px)`, opacity: 0 }
  ], { duration: 4000, easing: 'linear' });

  anim.onfinish = () => heart.remove();
}
setInterval(createHeart, 500);
