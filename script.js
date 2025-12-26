let found = 0;

const messages = {
  1: { img: "images/photo1.jpg", text: "Ты делаешь мои дни ярче ❤️" },
  2: { img: "images/photo2.jpg", text: "Каждый момент с тобой особенный ✨" },
  3: { img: "images/photo3.jpg", text: "Я улыбаюсь, когда думаю о тебе 😊" },
  4: { img: "images/photo4.jpg", text: "Ты моё счастье 💖" },
  5: { img: "images/photo5.jpg", text: "С тобой любой год будет лучшим 🎄" }
};

document.querySelectorAll(".heart").forEach(heart => {
  heart.onclick = () => {
    if (heart.classList.contains("found")) return;

    heart.classList.add("found");
    heart.style.visibility = "hidden";
    found++;

    const id = heart.dataset.id;
    document.getElementById("stamp-img").src = messages[id].img;
    document.getElementById("stamp-text").textContent = messages[id].text;
    document.getElementById("stamp").classList.remove("hidden");

    if (found === 5) {
      setTimeout(() => {
        document.getElementById("letter-closed").classList.remove("hidden");
      }, 400);
    }
  };
});

function closeStamp() {
  document.getElementById("stamp").classList.add("hidden");
}

function openLetter() {
  document.getElementById("letter-closed").classList.add("hidden");
  document.getElementById("letter-open").classList.remove("hidden");
}

function closeLetter() {
  document.getElementById("letter-open").classList.add("hidden");
}

/* ❄️ СНЕГ */
const snowContainer = document.querySelector(".snow");

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  snowflake.innerHTML = "❄";

  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.fontSize = 10 + Math.random() * 20 + "px";
  snowflake.style.animationDuration = 5 + Math.random() * 5 + "s";
  snowflake.style.opacity = Math.random();

  snowContainer.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 10000);
}

setInterval(createSnowflake, 200);

const music = document.getElementById("music");
const btn = document.getElementById("musicBtn");

btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    btn.textContent = "🔇 Выключить музыку";
  } else {
    music.pause();
    btn.textContent = "🎵 Включить музыку";
  }
});
