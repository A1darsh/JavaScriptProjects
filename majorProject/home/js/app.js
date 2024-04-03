window.addEventListener("load", () => {
  document.querySelector(".preload").classList.add("preload-finish");
});


const greeting = document.getElementById("greeting");

function setGreeting() {
  let hour = new Date().getHours();
  greeting.textContent =
    hour < 12
      ? "Good morning, "
      : hour < 18
      ? "Good afternoon, "
      : "Good evening, ";
}
setGreeting();

const name = document.getElementById("name");

function getName() {
  const storedName = localStorage.getItem("name");
  name.textContent = storedName ? storedName : " [Enter name]";
}

function setName(e) {
  if (e.type === "keypress" && e.keyCode !== 13) return;
  localStorage.setItem("name", e.target.innerText.trim());
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
getName();

const text = [
  "You matter.",
  "You're awesome!",
  "You did great today!",
  
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  count === text.length && (count = 0);
  currentText = text[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 400);
})();

const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("accordion-button-active");
  });
});

const modalBtn = document.querySelector(".modal-btn");
const modalBg = document.querySelector(".modal-bg");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", () => {
  modalBg.classList.add("modal-active");
});

closeBtn.addEventListener("click", () => {
  modalBg.classList.remove("modal-active");
});
