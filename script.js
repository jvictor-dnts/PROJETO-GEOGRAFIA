 const images = [
      {
        src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
        caption: "Mãos de diferentes culturas unidas pelo mundo."
      },
      {
        src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80",
        caption: "Tecnologia conectando povos de diferentes regiões."
      },
      {
        src: "https://images.unsplash.com/photo-1521790363533-808c3e5f6f3c?auto=format&fit=crop&w=600&q=80",
        caption: "Diversidade cultural fortalecida pela conexão global."
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