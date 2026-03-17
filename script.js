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
function kiraSemua(){

let s1 = parseFloat(document.getElementById("sub1").value) || 0;
let s2 = parseFloat(document.getElementById("sub2").value) || 0;
let s3 = parseFloat(document.getElementById("sub3").value) || 0;
let s4 = parseFloat(document.getElementById("sub4").value) || 0;
let koko = parseFloat(document.getElementById("koko").value) || 0;

// kira PNGK
let subs = [s1,s2,s3,s4];
let total = subs.reduce((a,b)=>a+b,0);
let count = subs.filter(v=>v>0).length;

let pngk = total / count;

// kira merit (90% akademik + 10% koko)
let merit = (pngk/4 * 90) + (koko * 0.1);

// status
let status = "";
if(merit >= 80){
status = "🔥 Sangat Tinggi (Course Popular)";
}else if(merit >= 70){
status = "✅ Baik (Banyak Pilihan)";
}else if(merit >= 60){
status = "⚠ Sederhana";
}else{
status = "❌ Rendah";
}

// display
document.getElementById("pngk").innerHTML = pngk.toFixed(2);
document.getElementById("merit").innerHTML = merit.toFixed(2) + "%";
document.getElementById("status").innerHTML = status;

}
