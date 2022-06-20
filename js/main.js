// menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");
const toTop = document.querySelector(".toTop");
const darkMode = document.querySelector(".dark");
menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  overlay.classList.toggle("show");
  menuButton.classList.toggle("open");
});

var info = document.getElementById("info").innerHTML;
document.getElementById("info").innerHTML = "";
console.log(info);
let i = 0;
var colors = ["#ff0000", "#00ff00", "#0000ff"];
let random_color;
typeWriter = () => {
  if (i < info.length) {
    document.getElementById("info").innerHTML += info.substring(i, i + 1);
    random_color = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("info").style.color = random_color;
    i++;
    setTimeout(typeWriter, 300);
  } else {
    i = 0;
    document.getElementById("info").innerHTML = "";
    typeWriter();
  }
};
typeWriter();
// overlay
overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

function toTheTop() {
  if (document.documentElement.scrollTop < 600) {
    toTop.style.display = "none";
  }
  if (document.documentElement.scrollTop >= 600) {
    toTop.style.display = "block";
  }
}
toTop.addEventListener("click", () => {
  toTop.style.animation = "spinner 2s 1";
});
window.onscroll = function () {
  toTheTop();
};

const checkbox = document.getElementById("checkbox");
let check = 0;
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  if (!check) {
    document.body.style.color = "white";
    const text = document.getElementsByTagName("*");
    for (let i = 0; i < text.length; i++) {
      text[i].style.color = "rgb(218 155 63)";
    }

    check = 1;
  } else {
    document.body.style.color = "black";
    const text = document.getElementsByTagName("*");
    for (let i = 0; i < text.length; i++) {
      text[i].style.color = "black";
    }

    check = 0;
  }

  document.getElementById("info").style.color = random_color;
});
