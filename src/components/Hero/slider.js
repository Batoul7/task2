   const changeBack = document.querySelectorAll('.change-back');
    const bullets = document.querySelectorAll('.bullets li');

    let currentSlide = 1;

    changeBack.forEach(item => {
        item.addEventListener('click', function() {
            if (this.classList.contains('left')) {
                currentSlide = currentSlide === 1 ? 3 : currentSlide - 1;
            } else {
                currentSlide = currentSlide === 3 ? 1 : currentSlide + 1;
            }

            document.getElementById('home').className = `hero hero${currentSlide}`;

            bullets.forEach((bullet, index) => {
                bullet.classList.remove('active');
                if (index === currentSlide - 1) {
                    bullet.classList.add('active');
                }
            });
        });
    });