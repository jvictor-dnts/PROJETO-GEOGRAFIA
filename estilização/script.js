const images = [
  {
    src: "https://cdn.pixabay.com/photo/2017/08/06/00/03/fake-2581741_960_720.jpg",
    caption: "Fake News: perigo das redes sociais."
  },
  {
    src: "https://cdn.pixabay.com/photo/2016/11/29/09/32/social-media-1863616_960_720.jpg",
    caption: "Redes sociais: conectam, mas também manipulam."
  },
  {
    src: "https://cdn.pixabay.com/photo/2017/01/20/00/30/world-1991217_960_720.png",
    caption: "Globalização: interconexão e desafios culturais."
  }
];

let currentIndex = 0;
const carouselImg = document.getElementById("carousel-img");
const carouselCaption = document.getElementById("carousel-caption");

document.getElementById("next-img").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

document.getElementById("prev-img").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

function updateCarousel() {
  carouselImg.src = images[currentIndex].src;
  carouselCaption.textContent = images[currentIndex].caption;
}