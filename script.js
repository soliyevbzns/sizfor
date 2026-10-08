let currentScreen = 1;


// Sahifa almashtirish
function goTo(number) {

  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document
    .getElementById("screen" + number)
    .classList.add("active");

  currentScreen = number;
}


// 1-bo'limdagi "Yo'q"
function refuse1() {

  const button = document.getElementById("no1");
  const message = document.getElementById("message1");

  message.innerHTML =
    "😤 Yo‘q deyish variant emas! Baribir tanishasiz ❤️";

  button.innerHTML = "Tanishmayman 😤";
  button.style.background = "#8b0000";

  // Endi bosilmaydi
  button.disabled = true;

  // Majburiy ravishda tanishish tugmasi
  setTimeout(() => {

    const newButton = document.createElement("button");

    newButton.className = "yes";
    newButton.innerHTML = "Mayli, tanishaman ❤️";

    newButton.onclick = () => {
      goTo(2);
      createHearts(12);
    };

    button.parentElement.appendChild(newButton);

  }, 700);

  createHearts(8);
}


// Foti tanlash
function chooseFoti() {

  showUuu("Uuuu 😍❤️");

  setTimeout(() => {
    goTo(3);
  }, 1200);
}


// Kirillcha Foti
function chooseCyrillic() {

  const button = document.getElementById("cyrillic");
  const message = document.getElementById("message2");

  message.innerHTML =
    "😂 Biz o‘zbekmiz-ku! Lotinchani tanlang ❤️";

  button.innerHTML = "Biz o‘zbekmiz-ku 😂";

  button.disabled = true;

  button.style.background = "#888";

  createHearts(5);
}


// Video — hozir 5 minutda
function videoYes() {

  showUuu("Uuuu 😎🔥");

  createHearts(20);

  setTimeout(() => {
    goTo(4);
  }, 1500);
}


// Video — arazlaganman
function runAway() {

  const button = document.getElementById("runaway");

  button.classList.add("run-away");

  // Tugma ekran bo'ylab qochadi
  const maxX = window.innerWidth - button.offsetWidth - 20;
  const maxY = window.innerHeight - button.offsetHeight - 20;

  const x = Math.max(
    10,
    Math.random() * maxX
  );

  const y = Math.max(
    10,
    Math.random() * maxY
  );

  button.style.left = x + "px";
  button.style.top = y + "px";

  createHearts(5);

  document.getElementById("message3").innerHTML =
    "Arazlaganingizni bildik 😭😂 Endi qochmang...";

  // Bir necha marta qochgandan keyin keyingi bosqich
  button.dataset.times =
    Number(button.dataset.times || 0) + 1;

  if (Number(button.dataset.times) >= 4) {

    button.innerHTML =
      "Bo‘ldi, arazlash yetar 😭❤️";

    button.classList.remove("run-away");

    button.style.position = "relative";
    button.style.left = "auto";
    button.style.top = "auto";

    button.onclick = () => {
      showUuu("Yarashdikmi? 🥹❤️");

      setTimeout(() => {
        goTo(4);
      }, 1200);
    };
  }
}


// Final "Ha, albatta"
function celebrate() {

  showUuu("UUUUUUU 😍❤️🎉");

  createHearts(50);
  createConfetti(40);

  document.getElementById("finalMessage").innerHTML = `
    <div style="
      margin-top:25px;
      font-size:22px;
      font-weight:bold;
      animation: pop .5s ease;
    ">
      ❤️ Ha-a-a! ❤️<br>
      <span style="font-size:18px;">
        40 kun qoldi, jonim 🥹💕
      </span>
    </div>
  `;

  document.querySelector(".love-button").style.display = "none";
}


// "UUU" effekti
function showUuu(text) {

  const old = document.querySelector(".uuu");

  if (old) old.remove();

  const element = document.createElement("div");

  element.className = "uuu";
  element.innerHTML = text;

  document.body.appendChild(element);

  setTimeout(() => {
    element.remove();
  }, 1700);
}


// Yuraklar
function createHearts(amount) {

  const emojis = [
    "❤️",
    "💕",
    "💖",
    "💗",
    "💓",
    "💘",
    "🥰"
  ];

  for (let i = 0; i < amount; i++) {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
      emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left =
      Math.random() * 100 + "vw";

    heart.style.animationDuration =
      (2 + Math.random() * 3) + "s";

    heart.style.fontSize =
      (18 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}


// Konfetti
function createConfetti(amount) {

  const container =
    document.getElementById("celebration");

  const emojis = [
    "🎉",
    "❤️",
    "💕",
    "✨",
    "🥰",
    "💖"
  ];

  for (let i = 0; i < amount; i++) {

    const confetti =
      document.createElement("div");

    confetti.className = "confetti";

    confetti.innerHTML =
      emojis[Math.floor(Math.random() * emojis.length)];

    confetti.style.left =
      Math.random() * 100 + "%";

    confetti.style.top =
      -50 + Math.random() * 20 + "px";

    confetti.style.animationDelay =
      Math.random() * .8 + "s";

    container.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}


// Orqa fonda doimiy yuraklar
setInterval(() => {

  if (Math.random() > .5) {
    createHearts(1);
  }

}, 1200);