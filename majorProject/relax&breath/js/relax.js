
window.addEventListener("load", () => {
  document.querySelector(".preload").classList.add("preload-finish");
});

const linkColor = document.querySelectorAll(".nav-link");
function colorLink() {
  linkColor.forEach((l) => l.classList.remove("active"));
  this.classList.add("active");
}
linkColor.forEach((l) => l.addEventListener("click", colorLink));

