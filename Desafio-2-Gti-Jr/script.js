const sliderImg = document.querySelectorAll('.slider-img');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');

let currentSlider = 0;

function hideSlider() {
    sliderImg.forEach(item => item.classList.remove('on'));
}

function showSlider() {
    sliderImg[currentSlider].classList.add('on');
}

function nextSlide() {
    hideSlider()
    if(currentSlider == sliderImg.length -1) {
        currentSlider = 0;
    } else {
        currentSlider++;
    }
    showSlider();
}

function prevSlide() {
    hideSlider()
    if(currentSlider == 0) {
        currentSlider = sliderImg.length -1;
    } else {
        currentSlider--;
    }
    showSlider()
}

leftButton.addEventListener('click', prevSlide);
rightButton.addEventListener('click', nextSlide);

