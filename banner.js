// JavaScript for automatic slideshow
let index = 0;
const images = document.querySelectorAll('.banner-img');
const intervalTime = 5000; // Interval time in milliseconds (5 seconds)

function changeImage() {
    // Hide the currently active image
    images[index].classList.remove('active');
    // Move to the next image
    index = (index + 1) % images.length;
    // Display the next image
    images[index].classList.add('active');
}

setInterval(changeImage, intervalTime);

