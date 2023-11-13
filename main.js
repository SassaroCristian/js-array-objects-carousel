document.addEventListener("DOMContentLoaded", function () {
    const carouselInner = document.getElementById("carouselInner");
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");
    const images = [
        {
            image: 'img/01.webp',
            title: 'Marvel\'s Spiderman Miles Morale',
            text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        }, {
            image: 'img/02.webp',
            title: 'Ratchet & Clank: Rift Apart',
            text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
        }, {
            image: 'img/03.webp',
            title: 'Fortnite',
            text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        }, {
            image: 'img/04.webp',
            title: 'Stray',
            text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
        }, {
            image: 'img/05.webp',
            title: "Marvel's Avengers",
            text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
        }
    ];

    images.forEach((image, index) => {
        let carouselSlide = document.createElement("div");
        carouselSlide.classList.add("carousel-slide");
        carouselSlide.innerHTML = `
            <img src="${image.image}">
            <div class="carousel-caption">
                <p class="title">${image.title}</p>
                <p class="text">${image.text}</p>
            </div>
        `;
        carouselInner.appendChild(carouselSlide);
    });

    const slides = document.querySelectorAll(".carousel-slide");
    let currentIndex = 0;

    function goToSlide(index) {
        for (let i = 0; i < slides.length; i++) {
            if (i === index) {
                slides[i].classList.add("active");
            } else {
                slides[i].classList.remove("active");
            }
        }
    }

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        goToSlide(currentIndex);
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        goToSlide(currentIndex);
    });

    goToSlide(currentIndex);
});
