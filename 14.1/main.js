const slides = document.querySelectorAll('.slide');
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');
        const dotsContainer = document.getElementById('dotsContainer');

        let currentIndex = 0;

        function updateSlider() {
            document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex === slides.length - 1;
            updateDots();
        }

        function updateDots() {
            dotsContainer.innerHTML = '';
            slides.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (index === currentIndex) {
                    dot.classList.add('active');
                }
                dot.addEventListener('click', () => {
                    currentIndex = index;
                    updateSlider();
                });
                dotsContainer.appendChild(dot);
            });
        }

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });

        nextButton.addEventListener('click', () => {
            if (currentIndex < slides.length - 1) {
                currentIndex++;
                updateSlider();
            }
        });

        updateSlider();