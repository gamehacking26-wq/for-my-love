function moveRandomEl(elm) {
  // Mobile par button gayab na ho isliye fixed position use ki hai
  elm.style.position = "fixed";
  elm.style.top = Math.floor(Math.random() * 80 + 10) + "%";
  elm.style.left = Math.floor(Math.random() * 80 + 10) + "%";
}

const moveRandom = document.querySelector("#move-random");

if (moveRandom) {
  // Desktop Hover
  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });
  // Mobile Touch support
  moveRandom.addEventListener("touchstart", function (e) {
    e.preventDefault();
    moveRandomEl(e.target);
  });
}

// Function to create floating elements (hearts/sparkles)
function createHeart() {
  const heart = document.createElement("div");
  // Celebration ke liye variety of icons
  const icons = ["❤️", "💖", "✨", "🌸", "💕", "💍"];
  heart.innerHTML = icons[Math.floor(Math.random() * icons.length)];
  
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.bottom = "-5vh";
  heart.style.zIndex = "1";
  heart.style.opacity = Math.random();
  heart.style.pointerEvents = "none";
  
  document.body.appendChild(heart);

  // Smooth animation logic
  const duration = Math.random() * 3000 + 3000;
  const animation = heart.animate([
    { transform: 'translateY(0) scale(1)', opacity: 1 },
    { transform: `translateY(-110vh) translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg) scale(1.5)`, opacity: 0 }
  ], {
    duration: duration,
    easing: 'ease-out'
  });

  animation.onfinish = () => heart.remove();
}

// Normal background interval
setInterval(createHeart, 400);

// --- CELEBRATION BURST FOR YES.HTML ---
if (window.location.pathname.includes("yes.html")) {
    // Page load hote hi 100 elements ka burst!
    for(let i = 0; i < 100; i++) {
        setTimeout(createHeart, i * 20); 
    }
}
