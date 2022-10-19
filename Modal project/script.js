"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal"); 0

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", openModal);
}
btnCloseModal.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal);

// Keypress , keydown, keyup are the 3 key events that can happen
document.addEventListener("keydown", function (e) {
    // console.log(e.key); This line prints the button pressed.
    if (e.key === "e") {
        if (!modal.classList.contains("hidden")) {
            closeModal();
            //We have to call the method here instead of just writing it as in previous cases.
        }
    }
})

