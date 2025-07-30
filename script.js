const navBtns = document.querySelectorAll('nav button');
const sections = document.querySelectorAll('main section');
navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    navBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(btn.dataset.section).classList.add('active');
  });
});

const carouselImgs = [
  {
    src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    caption: "Mãos de diferentes culturas unidas pelo mundo."
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    caption: "Conexão digital: todos ligados na mesma rede."
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    caption: "Diversidade cultural e respeito mútuo."
  }
];
let carouselIndex = 0;
function updateCarousel() {
  document.getElementById('carousel-img').src = carouselImgs[carouselIndex].src;
  document.getElementById('carousel-caption').textContent = carouselImgs[carouselIndex].caption;
}
document.getElementById('prev-img').onclick = function() {
  carouselIndex = (carouselIndex - 1 + carouselImgs.length) % carouselImgs.length;
  updateCarousel();
};
document.getElementById('next-img').onclick = function() {
  carouselIndex = (carouselIndex + 1) % carouselImgs.length;
  updateCarousel();
};
const carouselEl = document.getElementById('carousel-img');
let startX = 0;
carouselEl.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});
carouselEl.addEventListener('touchend', e => {
  let dx = e.changedTouches[0].clientX - startX;
  if (dx > 40) document.getElementById('prev-img').click();
  else if (dx < -40) document.getElementById('next-img').click();
});

const whatsMsgs = [
  "Nem tudo que viraliza é verdade!",
  "Desconfie de correntes suspeitas.",
  "Verifique sempre a fonte antes de compartilhar.",
  "Redes sociais: use com consciência!",
  "Proteja sua privacidade online.",
  "Cuidado com notícias emocionais demais.",
  "Compartilhe responsabilidade, não fake news!"
];
function trocaMensagemWhats() {
  const msgDiv = document.getElementById('whats-msg');
  let idx = Math.floor(Math.random() * whatsMsgs.length);
  msgDiv.textContent = whatsMsgs[idx];
}
setInterval(trocaMensagemWhats, 3200);

function showTip() {
  const tip = document.getElementById('tip-box');
  if (tip.style.display === "block") {
    tip.style.display = "none";
  } else {
    tip.style.display = "block";
    setTimeout(()=>{ tip.style.display = "none"; }, 6000);
  }
}
window.showTip = showTip; 

updateCarousel();