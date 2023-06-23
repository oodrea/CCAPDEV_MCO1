function showSection(sectionId, linkElement, event) {
 
    var sections = document.getElementsByClassName("section");
    
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }

    
    var sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = "flex";
    sectionToShow.style.flexDirection = "row";

   
    var links = document.getElementsByClassName("link");
    for (var j = 0; j < links.length; j++) {
        if (links[j] !== linkElement) {
        links[j].classList.remove("active-link");
        links[j].classList.add("not-active-link");
        }

    }

   
    linkElement.classList.add("active-link");
    linkElement.classList.remove("not-active-link");

  
    event.preventDefault();
}

var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
        showSlides(slideIndex += n);
    }

function currentSlide(n) {
    showSlides(slideIndex = n);
    }

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}