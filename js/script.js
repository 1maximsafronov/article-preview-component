const shareBtn = document.querySelector(`.article__share`);
const sharePopup = document.querySelector(`.article__share-popup`);

function onEscKeydown(evt) {
  if (evt.key == `Escape`) {
    closePopup();
  }
}

function onDocumentClick(evt) {
  if (evt.target !== sharePopup && evt.target !== shareBtn) {
    closePopup();
  }
}

function togglePopup() {
  if (shareBtn.classList.contains(`article__share--active`)) {
    closePopup();
  } else {
    openPopup();
  }
}

function openPopup() {
  shareBtn.classList.add(`article__share--active`);
  sharePopup.classList.remove(`article__share-popup--hide`);
  document.addEventListener(`keydown`, onEscKeydown);
}

function closePopup() {
  shareBtn.classList.remove(`article__share--active`);
  sharePopup.classList.add(`article__share-popup--hide`);
  document.removeEventListener(`keydown`, onEscKeydown);
}

shareBtn.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  togglePopup();
});
