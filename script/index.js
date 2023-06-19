let closeButton = document.querySelector(".popup__close-button");
let popup = document.querySelector(".popup");
let editButton = document.querySelector(".profile__edit-button");
let profileNameInput = document.querySelector(".popup__input_type_username");
let profileStatusInput = document.querySelector(
  ".popup__input_type_userstatus"
);
let profileName = document.querySelector(".profile__name");
let profileStatus = document.querySelector(".profile__status");
let popupForm = document.querySelector(".popup__form");

function openPopup() {
  profileNameInput.value = profileName.textContent;
  profileStatusInput.value = profileStatus.textContent;

  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function saveProfile(event) {
  event.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileStatus.textContent = profileStatusInput.value;

  closePopup();
}

document.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("popup_opened");
  }
});

editButton.addEventListener("click", openPopup);

closeButton.addEventListener("click", closePopup);

popupForm.addEventListener("submit", saveProfile);
