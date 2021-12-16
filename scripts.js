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