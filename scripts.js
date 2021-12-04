// activate stickyWhenScrolling when scrolling
window.onscroll = function() {
	stickyWhenScrolling()
};
var navlist = document.getElementById("navlist");
var sticky = navlist.offsetTop;

// makes navlist stick to the top
function stickyWhenScrolling() {
	if (window.pageYOffset >= sticky) {
      navlist.classList.add("sticky")
    }
    else {
      navlist.classList.remove("sticky");
    }
}

var slideIndex = 1;
showSlides(slideIndex);

function iterateSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = slides.length} 
  if (n < 1) {slideIndex = 1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}