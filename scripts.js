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

// shows current slide and updates dots
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = slides.length
    }
    if (n < 1) {
        slideIndex = 1
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// shows current image
function showImages(n) {
    let i;
    let images = document.getElementsByClassName("myImages");
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