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

var test = document.getElementById("test").innerHTML;
document.getElementById("test").innerHTML = "";
console.log(test);
let i = 0;
var colors = ["#ff0000", "#00ff00", "#0000ff"];

typeWriter = () => {
  if (i < test.length) {
    document.getElementById("test").innerHTML += test.substring(i, i + 1);
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("test").style.color = random_color;
    i++;
    setTimeout(typeWriter, 300);
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
darkMode.addEventListener("click", () => {
  darkMode.classList.add("fa-brightness");
  darkMode.classList.remove("fa-moon");
});
