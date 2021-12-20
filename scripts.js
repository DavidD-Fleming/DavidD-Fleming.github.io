// dynamic background
// array of rgb values for two colors
const startingBackgroundColors = [33, 124, 126, 226, 226, 226];
const backgroundColors = [33, 124, 126, 226, 226, 226];
const section1 = document.querySelector('.TotalBackground');
window.addEventListener('scroll', () => {
    const y = 1 + (window.scrollY || window.pageYOffset) / 700;
    var colorValue;
    for (i = 0; i < backgroundColors.length; i++) {
        if (i % 3 == 0) {
            colorValue = 100;
        } else if (i % 2) {
            colorValue = 200;
        } else {
            colorValue = 150;
        }
        backgroundColors[i] = Math.round(Math.min(Math.max(startingBackgroundColors[i] / y, colorValue), startingBackgroundColors[i]));
    }
    section1.style.background = `linear-gradient(80deg, rgb(${backgroundColors[0]}, ${backgroundColors[1]}, ${backgroundColors[2]}) 30%, rgb(${backgroundColors[3]}, ${backgroundColors[4]}, ${backgroundColors[5]}) 80%)`;
})

// sets to first project
var slideIndex = 1;
showSlides(slideIndex);

// sets to first image
var imageIndex = 1;
showImages(imageIndex);

// changes slide when left/right button is pressed
function iterateSlide(n) {
    showSlides(slideIndex += n);
}

// changes image when left/right button is pressed
function iterateImage(n) {
    showImages(imageIndex += n);
}

// jumps to project selected by dots
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// shows current slide and updates dots
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = slides.length
    }
    if (n < 1) {
        slideIndex = 1
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// shows current image
function showImages(n) {
    var i;
    var images = document.getElementsByClassName("myImages");
    if (n > images.length) {
        imageIndex = images.length
    }
    if (n < 1) {
        imageIndex = 1
    }
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[imageIndex - 1].style.display = "block";
}