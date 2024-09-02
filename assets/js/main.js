// active & enactive modal
modal = document.querySelector(".modal");
background_modal = document.querySelector(".background_modal");

function active_modal() {
  modal.classList.add("active");
  background_modal.classList.add("active");
}

function close_modal() {
  modal.classList.remove("active");
  background_modal.classList.remove("active");
}

// modal radio button
document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll('input[name="place_number"]');
  const numberInput = document.getElementById("number_place");

  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", function () {
      if (document.getElementById("plus").checked) {
        numberInput.classList.add("active");
      } else {
        numberInput.classList.remove("active");
      }
    });
  });
});

// loader
window.addEventListener("load", function () {
  document.getElementById("loader-container").style.display = "none";
  document.body.classList.remove("no-scroll");
});
document.body.classList.add("no-scroll");

// open & close menu
menu = document.querySelector("header .main_header nav");
bg_menu = document.querySelector(".bg_menu");

function open_menu() {
  menu.classList.add("active");
  bg_menu.classList.add("active");
}

function close_menu() {
  menu.classList.remove("active");
  bg_menu.classList.remove("active");
}

// Scroll to top & show or hide the button
let back_to_top = document.querySelector(".back_to_top");

function toggleBackToTopButton() {
  if (window.scrollY === 0) {
    back_to_top.style.display = "none";
  } else {
    back_to_top.style.display = "flex";
  }
}

toggleBackToTopButton();

window.addEventListener("scroll", toggleBackToTopButton);

back_to_top.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
