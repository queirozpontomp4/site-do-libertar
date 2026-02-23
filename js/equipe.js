const carrosseis = document.querySelectorAll(".carrossel");

carrosseis.forEach(carrossel => {
    
    const track = carrossel.querySelector(".carrossel-track");
    const cards = carrossel.querySelectorAll(".carrossel-card");
    const nextBtn = carrossel.querySelector(".next");
    const prevBtn = carrossel.querySelector(".prev");

    let index = 0;
    const cardWidth = cards[0].offsetWidth + 15;

    nextBtn.addEventListener("click", () => {
        if (index < cards.length - 1) {
            index++;
            track.style.transform = `translateX(-${index * cardWidth}px)`;
        }
    });

    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
            track.style.transform = `translateX(-${index * cardWidth}px)`;
        }
    });

});