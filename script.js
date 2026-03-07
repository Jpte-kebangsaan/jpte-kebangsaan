// script.js
const countdownDate = new Date("June 29, 2026 08:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
  const seconds = Math.floor((distance % (1000*60)) / 1000);

  document.getElementById("days").innerText = days.toString().padStart(2,'0');
  document.getElementById("hours").innerText = hours.toString().padStart(2,'0');
  document.getElementById("minutes").innerText = minutes.toString().padStart(2,'0');
  document.getElementById("seconds").innerText = seconds.toString().padStart(2,'0');

  if(distance < 0){
    clearInterval(timer);
    document.querySelector(".countdown").innerHTML = "Exam Started!";
  }
}, 1000);
// script.js
const galleryImages = document.querySelectorAll('.gallery-img');
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.getElementById('lightboxOverlay');
    overlay.style.display = 'flex';
    overlay.innerHTML = `<img src="${img.src}" style="max-width:90%; max-height:90%;">`;
    overlay.addEventListener('click', ()=> overlay.style.display='none');
  });
});
function openForm(type){
  const urlMap = {
    akademik: "https://forms.gle/kwg7FbCR5ALwsxoL9",
    kebajikan: "https://forms.gle/oHb5HjhzD4sXKc4j9",
    kokurikulum: "https://forms.gle/vzG7wDX81KMUWjvFA",
    pentadbiran: "https://forms.gle/ng3AkMDtm1JkJtXR8",
    terbuka: "https://forms.gle/xEoPuj7Drfs17AnF8"
  };
  document.getElementById("formFrame").src = urlMap[type];
  document.getElementById("formModal").style.display = "block";
}

function closeForm(){
  document.getElementById("formModal").style.display = "none";
  document.getElementById("formFrame").src = "";
}
const toggle = document.getElementById('darkToggle');
toggle.addEventListener('click', ()=>{
  document.body.classList.toggle('dark-mode');
});
