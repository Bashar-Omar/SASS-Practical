let button = document.querySelector(".toggler");
let navBar = document.querySelector(".navbar ");
button.addEventListener("click", () => {
  if (navBar.style.display === "block") {
    navBar.style.display = "none";
  } else {
    navBar.style.display = "block";
  }
});
