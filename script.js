const noBtn = document.getElementById("noBtn");
const bgm = document.getElementById("bgm");

/* music start on first click */
document.body.addEventListener("click", () => {
    bgm.play().catch(()=>{});
}, {once:true});

/* NO button run away */
function moveNo() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* YES click */
function yesClick() {
    document.body.innerHTML = `
    <div style="display:flex;justify-content:center;align-items:center;height:100vh;font-size:40px;">
        🎉 Yayyyyy !!! 🎉
    </div>`;
}

/* floating hearts */
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.animationDuration = (3+Math.random()*3)+"s";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(()=>heart.remove(),6000);
}

setInterval(createHeart, 300);
