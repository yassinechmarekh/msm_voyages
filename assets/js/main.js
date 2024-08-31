// active & enactive modal
modal = document.querySelector('.modal');
background_modal = document.querySelector('.background_modal');

function active_modal(){
    modal.classList.add("active");
    background_modal.classList.add("active");
}

function close_modal(){
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
