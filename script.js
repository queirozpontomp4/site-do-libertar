const track = document.querySelector('.carrossel-track');
const button = document.querySelector('.seta');
const cards = document.querySelectorAll('.carrossel-card');

let index = 0;
const cardWidth = 320;

button.addEventListener('click', () => {
  index++;

  if (index >= cards.length) {
    index = 0;
  }

  track.style.transform = `translate3d(-${index * cardWidth}px, 0, 0)`;
});