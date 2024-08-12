var arr = [
  {
    naam: "Pehle bhi main",
    url: "./songs/Pehle bhi main.mp3",
    img: "./images/animal.jpg",
  },
  {
    naam: "Jale 2",
    url: "./songs/Jale 2.mp3",
    img: "./images/jale.jpg",
  },
  {
    naam: "Arjan Vailly",
    url: "./songs/Arjan Vailly Ne.mp3",
    img: "./images/animal.jpg",
  },
];

var allSongs = document.querySelector("#all-songs");
var audio = new Audio();
var gaana = 0;
var poster = document.querySelector("#left");

var play = document.querySelector("#play");
var forward = document.querySelector("#forward");
var backward = document.querySelector("#backward");

function gaanaBajao() {
  var clutter = "";

  arr.forEach(function (obj, idx) {
    clutter += `<div class="song-card" id="${idx}">
    <div class="part1">
      <img src="${obj.img}" alt="image">
      <h2>${obj.naam}</h2>
    </div>
    <h6>3:69</h6>
  </div>`;
  });

  allSongs.innerHTML = clutter;
  audio.src = arr[gaana].url;

  poster.style.backgroundImage = `url(${arr[gaana].img})`;
}
gaanaBajao();

allSongs.addEventListener("click", function (val) {
  gaana = val.target.id;
  play.innerHTML = `<i class="ri-pause-circle-line"></i>`;
  flag = 1;
  gaanaBajao();
  audio.play();
});

var flag = 0;
play.addEventListener("click", function () {
  if (flag == 0) {
    play.innerHTML = `<i class="ri-pause-circle-line"></i>`;
    gaanaBajao();
    audio.play();
    flag = 1;
  } else {
    play.innerHTML = `<i class="ri-play-circle-line"></i>`;
    gaanaBajao();
    audio.pause();
    flag = 0;
  }
});

forward.addEventListener("click", function () {
  if (gaana < arr.length - 1) {
    gaana++;
    gaanaBajao();
    audio.play();
  } else {
    forward.style.opacity = "0.5";
  }
});
backward.addEventListener("click", function () {
  if (gaana > 0) {
    gaana--;
    gaanaBajao();
    audio.play();
  } else {
    backward.style.opacity = "0.5";
  }
});
