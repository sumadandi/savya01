const carouselSlide = document.querySelector('.carousel-slide');
const images = carouselSlide.querySelectorAll('img');

let counter = 6;
const size = images[6].clientWidth;

function nextSlide() {
    if (counter >= images.length - 1) {
        counter = -1;
    }
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

setInterval(nextSlide, 3000);
