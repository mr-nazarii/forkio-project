const content = document.querySelector(".nav__list");
const menuBtn = document.getElementById("check");

let menuOpen = false;

document.addEventListener("click", (e) => {
  let target = e.target;

  if (
    target.className.toLowerCase() === "check" ||
    target.className.toLowerCase() === "nav__hamburger" ||
    target.className.toLowerCase() === "check-span"
  ) {
    menuBtn.addEventListener("click", () => {
      if (!menuOpen) {
        content.style.cssText = "display: flex";
        menuOpen = true;
      } else {
        content.style.removeProperty("display");

        menuOpen = false;
      }
    });
  } else {
    content.style.removeProperty("display");
    menuBtn.checked = false;

    menuOpen = false;
  }
});
