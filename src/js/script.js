const content = document.querySelector(".nav__list");
const menuBtn = document.getElementById("check");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    content.style.cssText = "display: inline-block";
    menuOpen = true;
  } else {
    content.style.removeProperty("display");

    menuOpen = false;
  }
});
