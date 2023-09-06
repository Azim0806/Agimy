

if (typeof window.CSS.registerProperty === 'function') {
  console.log('CSS.registerProperty supported 🎉')
  document.body.style.setProperty('--supported', 1);
  document.body.classList.add('registerProperty-supported')
} else {
  console.log('CSS.registerProperty not supported ❌')
  document.body.style.setProperty('--not-supported', 1);
  document.body.classList.add('registerProperty-not-supported')
}
// Scroll to top
const scrollToTop = document.querySelector('.scroll-to-top')
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTop.style.display = "grid"
    } else {
        scrollToTop.style.display = "none"
    }
})

// Slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 24,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        }
    }
  });

//   Aos
AOS.init({
    duration: 1000,
    easing: "ease-in-out",
});










const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  
  "#b1a7a6",
  "#edf2f4"
  
  
];


circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
















