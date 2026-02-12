const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

let yesScale = 1;
let noTries = 0;

const messages = [
  "Too late 😏💘(I LOVE YOU💖)",
  "I knew it 😌💖(I LOVE YOU💖)",
  "You had no choice anyway 😈(I LOVE YOU💖)",
  "Best decision ever 🥰(I LOVE YOU💖)",
  "Congrats! You're stuck with me💖 😂(I LOVE YOU💖)"
];

const noTexts = [
  "No 💔",
  "Are you sure? 😳",
  "Think again 🤨",
  "Still no? 😈",
  "Just click Yes 😤"
];

// زرار No يهرب قبل اللمس
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

function moveNoButton() {
  noTries++;

  // يغيّر الكلام
  noBtn.textContent = noTexts[noTries % noTexts.length];

  // يقرّب من زر Yes شوية
  const yesRect = yesBtn.getBoundingClientRect();

  const offsetX = Math.random() * 100 - 50;
  const offsetY = Math.random() * 80 - 40;

  let x = yesRect.left + offsetX;
  let y = yesRect.top + offsetY;

  // يفضل جوه الشاشة
  x = Math.max(10, Math.min(window.innerWidth - 120, x));
  y = Math.max(10, Math.min(window.innerHeight - 60, y));

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  // يصغر شوية (ضعيف)
  const scale = Math.max(0.6, 1 - noTries * 0.05);
  noBtn.style.transform = `scale(${scale})`;

  // YES يكبر
  yesScale += 0.12;
  yesBtn.style.transform = `scale(${yesScale})`;
}

// زر Yes
yesBtn.addEventListener("click", () => {
  const randomMessage =
    messages[Math.floor(Math.random() * messages.length)];

  message.innerHTML = randomMessage;

  if (navigator.vibrate) {
    navigator.vibrate([200, 100, 200]);
  }

  noBtn.style.display = "none";
  yesBtn.style.display = "none";
});

