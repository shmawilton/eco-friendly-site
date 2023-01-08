let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('myslides')
    let dots = document.getElementById('dot');
    if (n > slides.length) { slideIndex = 1}
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].getElementsByClassName.display = "none"
    }
    for (i = 0; i < dots.length; i++) {
        dots.className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].getElementsByClassName.display = "block";
    dots[slideIndex - 1].className += "active"
}