document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carousel');
    const cards = Array.from(carousel.children);
    const cardWidth = document.querySelector('.property-card').offsetWidth + 20; // width + margin-right
    let currentIndex = 0;

    // Clone the first and last few cards to create an infinite loop effect
    cards.slice(0, 3).forEach(card => {
        carousel.appendChild(card.cloneNode(true));
    });

    cards.slice(-3).forEach(card => {
        carousel.insertBefore(card.cloneNode(true), carousel.firstChild);
    });

    // Function to move the carousel
    function moveCarousel() {
        currentIndex++;
        carousel.style.transition = 'transform 2.5s ease';
        carousel.style.transform = `translateX(${-currentIndex * cardWidth}px)`;

        // Reset the carousel position when it reaches the cloned end
        if (currentIndex === cards.length) {
            setTimeout(() => {
                carousel.style.transition = 'none';
                carousel.style.transform = `translateX(${-(cards.length - 3) * cardWidth}px)`;
                currentIndex = cards.length - 3;
            }, 500);
        }
    }

    // Initial positioning to show the cloned elements correctly
    carousel.style.transform = `translateX(${-3 * cardWidth}px)`;
    currentIndex = 3;

    // Move the carousel every 3 seconds
    setInterval(moveCarousel, 6000);
});
