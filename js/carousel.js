  // JavaScript for Carousel Functionality
        const slides = document.querySelector('.carousel-slides');
        const totalSlides = document.querySelectorAll('.carousel-slide').length;
        let currentIndex = 0;

        // Function to show next slide
        function showNextSlide() {
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
        }

        // Function to show previous slide
        function showPrevSlide() {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalSlides - 1;
            }
            updateCarousel();
        }

        // Function to update the carousel's position
        function updateCarousel() {
            const newTransformValue = `translateX(-${currentIndex * 100}%)`;
            slides.style.transform = newTransformValue;
        }

        // Add event listeners to the buttons
        document.querySelector('.next-btn').addEventListener('click', showNextSlide);
        document.querySelector('.prev-btn').addEventListener('click', showPrevSlide);