// SCROLL REVEAL ANIMATION

function reveal(){

let reveals = document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight = window.innerHeight;
let elementTop = reveals[i].getBoundingClientRect().top;
let elementVisible = 100;

if(elementTop < windowHeight - elementVisible){
reveals[i].classList.add("active");
}

}

}

window.addEventListener("scroll", reveal);
/* =========================
SCROLL REVEAL ANIMATION
========================= */

function revealOnScroll(){
const reveals = document.querySelectorAll(".reveal");

reveals.forEach((element)=>{
const windowHeight = window.innerHeight;
const elementTop = element.getBoundingClientRect().top;
const revealPoint = 120;

if(elementTop < windowHeight - revealPoint){
element.classList.add("active");
}
});
}

window.addEventListener("scroll", revealOnScroll);



/* =========================
COUNTDOWN EXAM
========================= */

const examDate = new Date("May 20, 2026 08:00:00").getTime();

const countdown = setInterval(function(){

const now = new Date().getTime();

const distance = examDate - now;

const days = Math.floor(distance / (1000*60*60*24));
const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
const seconds = Math.floor((distance % (1000*60)) / 1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

if(distance < 0){
clearInterval(countdown);
}

},1000);



/* =========================
CLOCK MALAYSIA
========================= */

function updateClock(){

const now = new Date();

const options = {
timeZone:"Asia/Kuala_Lumpur",
hour:"2-digit",
minute:"2-digit",
second:"2-digit",
weekday:"long",
year:"numeric",
month:"long",
day:"numeric"
};

const time = now.toLocaleString("ms-MY", options);

document.getElementById("clockMY").innerHTML = "🇲🇾 " + time;

}

setInterval(updateClock,1000);



/* =========================
STUDENT VOICE FORM POPUP
========================= */

function openForm(type){

let formURL = "";

if(type === "akademik"){
formURL = "https://docs.google.com/forms/d/e/1FAIpQLScp28vkbGDj24-akbC35RJIRrv3YBKS8jAxGCmuJLeuQWkfHA/viewform";
}

if(type === "kebajikan"){
formURL = "https://docs.google.com/forms/d/e/1FAIpQLScp28vkbGDj24-akbC35RJIRrv3YBKS8jAxGCmuJLeuQWkfHA/viewform";
}

if(type === "kokurikulum"){
formURL = "https://docs.google.com/forms/d/e/1FAIpQLScp28vkbGDj24-akbC35RJIRrv3YBKS8jAxGCmuJLeuQWkfHA/viewform";
}

if(type === "pentadbiran"){
formURL = "https://docs.google.com/forms/d/e/1FAIpQLScp28vkbGDj24-akbC35RJIRrv3YBKS8jAxGCmuJLeuQWkfHA/viewform";
}

if(type === "terbuka"){
formURL = "https://docs.google.com/forms/d/e/1FAIpQLScp28vkbGDj24-akbC35RJIRrv3YBKS8jAxGCmuJLeuQWkfHA/viewform";
}

document.getElementById("formFrame").src = formURL;

document.getElementById("formModal").style.display = "flex";

}

function closeForm(){
document.getElementById("formModal").style.display = "none";
}



/* =========================
GALLERY LIGHTBOX
========================= */

const galleryImages = document.querySelectorAll(".gallery-img");

galleryImages.forEach(img => {

img.addEventListener("click", function(){

const overlay = document.createElement("div");

overlay.style.position="fixed";
overlay.style.top="0";
overlay.style.left="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,0.9)";
overlay.style.display="flex";
overlay.style.alignItems="center";
overlay.style.justifyContent="center";
overlay.style.zIndex="9999";

const bigImg = document.createElement("img");

bigImg.src = this.src;
bigImg.style.maxWidth="90%";
bigImg.style.maxHeight="90%";
bigImg.style.borderRadius="10px";
bigImg.style.boxShadow="0 0 40px #00f2fe";

overlay.appendChild(bigImg);

overlay.addEventListener("click", ()=>{
overlay.remove();
});

document.body.appendChild(overlay);

});

});
/* =========================
GALLERY LIGHTBOX FULL
========================= */

const galleryImages = document.querySelectorAll(".gallery-img");
const lightboxOverlay = document.getElementById("lightboxOverlay");

galleryImages.forEach(img => {
  img.addEventListener("click", function(){
    lightboxOverlay.innerHTML = `<img src="${this.src}" alt="Gallery Image">`;
    lightboxOverlay.classList.add("active");
  });
});

lightboxOverlay.addEventListener("click", function(){
  lightboxOverlay.classList.remove("active");
});
