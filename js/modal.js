const modal = document.querySelector(".backdrop");
const BtnOpen = document.querySelector(".modal-btn-open");
const BtnClose = document.querySelector(".modal-btn-close");

const toggleModal = () => modal.classList.toggle("is-hidden");

BtnOpen.addEventListener("click", toggleModal);
BtnClose.addEventListener("click", toggleModal);
