let currentIndex = 0;
const items = document.querySelectorAll('.item');
const totalItems = items.length;

function moveNext() {
  currentIndex++;
  if (currentIndex >= totalItems) {
    currentIndex = 0;
  }
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentIndex * 320; // Adjust according to item width and margin
  document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
}

// Automatic carousel movement
setInterval(moveNext, 3000); // Adjust timing as needed
