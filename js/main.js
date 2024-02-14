const btnMenu = document.getElementById("btn-menu");

btnMenu.addEventListener("click", function () {
  document.getElementById("nav-items").classList.toggle("-translate-x-full");
});
//////////////////// BACTOP //////////////////////////////////
window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = "20px";
  } else {
    backtop.style.bottom = "-50px";
  }
}
// ////////////////////// LIGTH DARK ////////////////////////
let modeBtn = document.getElementById("light-dark");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
