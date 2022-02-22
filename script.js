function playMusic(event) {
  const keyButton = document.querySelector(`.key[data-key='${event.keyCode}']`);
  if (keyButton) {
    keyButton.classList.add('playing');
  }
  //to do ,here i will add the logic of playing an audio later
}

function removePlaying(event) {
  if (event.propertyName != 'transform') return;

  this.classList.remove('playing');
}
const allKeys = document.querySelectorAll('.key');

allKeys.forEach((key) => {
  key.addEventListener('transitionend', removePlaying);
});

window.addEventListener('keydown', playMusic);
