function yesClick() {
  document.getElementById("message").innerHTML =
    "💖 I will love you forever 💖<br>That's my hope — Kelvin 💕";
  hearts();
}

function noClick() {
  document.getElementById("message").innerHTML =
    "😢 My heart is a little sad...";
}

function hearts() {
  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "24px";
    heart.style.animation = "float 3s linear";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-100vh); opacity: 0; }
}`;
document.head.appendChild(style);
