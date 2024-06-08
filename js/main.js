let modeBtn = document.getElementById("light_mode");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "light") {
    this.firstElementChild.src = "image/moon.svg";
  } else {
    this.firstElementChild.src = "image/sun.svg";
  }
  document.body.classList.toggle("light");
});
