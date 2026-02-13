const hearts = document.querySelector(".hearts");

for (let i = 0; i < 20; i++) {
  let heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDuration = 3 + Math.random() * 5 + "s";
  hearts.appendChild(heart);
}
function sayYes() {
  const box = document.getElementById("responseBox");
  box.className = "valentine-response success";
  box.innerHTML = "Thank you for choosing me ❤️✨<br>My forever begins with you!";
}

function sayNo() {
  const box = document.getElementById("responseBox");
  box.className = "valentine-response sad";
  box.innerHTML = "Htt yaar bubuwaa 💔<br>Tod di n Dil meraa.";
}
