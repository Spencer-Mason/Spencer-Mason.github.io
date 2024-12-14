//Open and close contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//Display the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

//Change slide on left/right arrow click
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Change slide on dot click
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); //Takes all elements with class name "mySlides" and stores them in variable array "slides"
    var dots = document.getElementsByClassName("dot"); //Takes all elements with class name "dot" and stores them in variable array "dots"
    if (n > slides.length) {slideIndex = 1}; //When next arrow is clicked on the last slide, brings it back to slide 1
    if (n < 1) {slideIndex = slides.length}; //When previous arrow is clicked on first slide, brings it to last slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //Takes each item in the array "slides" and sets the display to none
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //Takes each item in the array "dots" and removes "active" styling
    }
    slides[slideIndex - 1].style.display = "block"; //Displays the image in the slideshow
    dots[slideIndex - 1].className += " active"; //Adds "active" styling to dot associated with image
}