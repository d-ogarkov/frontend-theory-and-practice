const buttonOpen = document.querySelector('.button_type_open');
const modalWindow = document.querySelector('.popup');
const buttonCancel = document.querySelector('.popup__button_type_cancel');

function openModal(modal) {
  modal.classList.add('popup_opened');
}

function closeModal(modal) {
  modal.classList.remove('popup_opened');
}

function handleKeyPress(evt) {
  if (evt.key === 'Escape') {
    closeModal(modalWindow);
  }
}

buttonOpen.addEventListener('click', () => {
  openModal(modalWindow);
  document.addEventListener('keydown', handleKeyPress);
});

buttonCancel.addEventListener('click', () => {
  closeModal(modalWindow);
  document.removeEventListener('keydown', handleKeyPress);
});
