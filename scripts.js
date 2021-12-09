// sets to first project
var slideIndex = 1;
showSlides(slideIndex);

// changes slide when left/right button is pressed
function iterateSlide(n) {
    showSlides(slideIndex += n);
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

function witcherHover(n) {
    n.style.opacity = "0%";
}

function witcherUnhover(n) {
    n.style.opacity = "100%";
}