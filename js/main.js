var slideIndex = 0;
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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//slide automatico

showSlide();

function showSlide(){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlide, 5000);
};




var slideIndex2 = 0;
showSlide2();

function showSlide2(){
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex2++;
    if(slideIndex2 > slides.length) { slideIndex2 = 1 }
    slides[slideIndex2-1].style.display = "block";
    setTimeout(showSlide2, 7000);
};


//Mapa do Contato

function openPlace(evt, placeName){
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }
    
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active","");
    }
    
    document.getElementById(placeName).style.display = "block";
    evt.currentTarget.className += " active";
    
   
}
