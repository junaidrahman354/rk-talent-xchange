let menuBtn = document.querySelector(".menu-btn");
let navLinks = document.querySelector('.nav-links');
let navLinksLI = document.querySelectorAll('.nav-links li a');

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    menuBtn.classList.toggle("active");
    navLinks.classList.toggle("active");
}

for(var i = 0; i < navLinksLI.length; i++) {
    navLinksLI[i].addEventListener("click", toggleMenu);
}

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 2000,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        },
        1350:{
            items:4
        }
    }
})

var homeSection = document.querySelector(".home");
window.addEventListener("scroll", pageScrollFunction);
window.addEventListener("load", pageScrollFunction);

function pageScrollFunction() {
    if(window.scrollY > 120){
        homeSection.classList.add("active");
    }else{
        homeSection.classList.remove("active");
    }
}

let valuesDisplays = document.querySelectorAll(".num");
let interval = 5000;

valuesDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
})

    const swiper = new Swiper('.swiper', {
  // Optional parameters
//   direction: 'vertical
autoplay: {
    delay: 3000,
},
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

window.addEventListener("scroll", reveal);

function reveal(){
    var reveals = document.querySelectorAll(".reveal");
    for(var i = 0; i < reveals.length; i++){

        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add("active");
        }else{
            reveals[i].classList.remove("active");
        }
    }
}

AOS.init({
    duration: 1000
});

 