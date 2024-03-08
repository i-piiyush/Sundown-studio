const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

var img = document.querySelector(".fixed-img");
var elemContainer = document.querySelector(".elem-container");

elemContainer.addEventListener("mouseenter", function () {
  img.style.display = "block";
});
elemContainer.addEventListener("mouseleave", function () {
  img.style.display = "none";
});

var first = document.querySelector("#first");

first.addEventListener("mouseenter", function () {
  let a = first.getAttribute("data-img");
  img.style.backgroundImage = `url(${a})`;
});
var second = document.querySelector("#second");
second.addEventListener("mouseenter", function () {
  let a = second.getAttribute("data-img");
  img.style.backgroundImage = `url(${a})`;
});
var third = document.querySelector("#third");
third.addEventListener("mouseenter", function () {
  let a = third.getAttribute("data-img");
  img.style.backgroundImage = `url(${a})`;
});
var forth = document.querySelector("#forth");
forth.addEventListener("mouseenter", function () {
  let a = forth.getAttribute("data-img");
  img.style.backgroundImage = `url(${a})`;
});
var fifth = document.querySelector("#fifth");
fifth.addEventListener("mouseenter", function () {
  let a = fifth.getAttribute("data-img");
  img.style.backgroundImage = `url(${a})`;
});
var sixth = document.querySelector("#sixth");
sixth.addEventListener("mouseenter", function () {
  let a = sixth.getAttribute("data-img");
  img.style.backgroundImage = `url(${a})`;
});
var seventh = document.querySelector("#seventh");
seventh.addEventListener("mouseenter", function () {
  let a = seventh.getAttribute("data-img");
  img.style.backgroundImage = `url(${a})`;
});

var h1 = document.querySelector("#h1");
var h2 = document.querySelector("#h2");
var h3 = document.querySelector("#h3");
var para = document.querySelector("#para");
var rightImg = document.querySelector("#right-img");

function op1() {
  h1.style.opacity = "0.4";
  h2.style.opacity = "1";
  h3.style.opacity = "0.4";

  para.innerHTML =
    "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.";

  h1.style.transition = "all 0.3s ease";
  h2.style.transition = "all 0.3s ease";
  h3.style.transition = "all 0.3s ease";
  h2.style.transform = `scale(1.2)`;
  h3.style.transform = `scale(1)`;
  h1.style.transform = `scale(1)`;

  let a = h2.getAttribute("data-img");
  rightImg.style.backgroundImage = `url(${a})`;
}
function op2() {
  h1.style.opacity = "0.4";
  h2.style.opacity = "0.4";
  h3.style.opacity = "1";

  para.innerHTML =
    "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.";

  h1.style.transition = "all 0.3s ease";
  h2.style.transition = "all 0.3s ease";
  h3.style.transition = "all 0.3s ease";
  h3.style.transform = `scale(1.2)`;
  h2.style.transform = `scale(1)`;
  h1.style.transform = `scale(1)`;

  let a = h3.getAttribute("data-img");
  rightImg.style.backgroundImage = `url(${a})`;
}
function op3() {
  h1.style.opacity = "1";
  h2.style.opacity = "0.4";
  h3.style.opacity = "0.4";

  para.innerHTML =
    "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";

  h1.style.transition = "all 0.3s ease";
  h2.style.transition = "all 0.3s ease";
  h3.style.transition = "all 0.3s ease";
  h1.style.transform = `scale(1.2)`;
  h2.style.transform = `scale(1)`;
  h3.style.transform = `scale(1)`;

  let a = h1.getAttribute("data-img");
  rightImg.style.backgroundImage = `url(${a})`;
}

var wrapper = document.querySelector(".wrapper");
wrapper.addEventListener("mouseleave", function () {
  h1.style.transform = `scale(1)`;
  h2.style.transform = `scale(1)`;
  h3.style.transform = `scale(1)`;
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 40,
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 
});
function updateSwiperConfig() {
  if (window.innerWidth < 768) {
    swiper.params.slidesPerView = 1.5; // Change the number of slides per view for smaller screens
  } else {
    swiper.params.slidesPerView = 4; // Set your default number of slides per view
  }

  swiper.update(); // Update Swiper instance
}

// Call the function on window resize
window.addEventListener('resize', updateSwiperConfig);

// Initial call to set the correct configuration on page load
updateSwiperConfig();
var cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursor.style.left = posX + "px";
  cursor.style.top = posY + "px";
});

var slider = document.querySelector(".page-5");
slider.addEventListener("mouseenter", function () {
  cursor.style.transform = `scale(${6})`;
});

var slider = document.querySelector(".page-5");
slider.addEventListener("mouseleave", function () {
  cursor.style.transform = `scale(${0})`;
});

var fullWrapper = document.querySelector(".full-wrapper")
var menu = document.querySelector(".menu h3")
var fullScr =  document.querySelector(".full-scr")
var navImg = document.querySelector("nav img")
var navBtn = false
menu.addEventListener("click",function(){
  if(navBtn == false){

  
  fullWrapper.style.top = 0;
  fullScr.style.top = 0;
  navImg.style.opacity = 0
  
  
  navBtn = true

}
else{

  fullWrapper.style.top = "-100%"
  fullScr.style.top = "-100%"
  navImg.style.opacity = 1
  
  navBtn = false

}

})