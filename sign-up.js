// JavaScript to toggle form visibility
document.addEventListener('DOMContentLoaded', function() {
    const signUpLink = document.querySelector('.sign-up');
    const formContainer = document.querySelector('#signup-form-container');
    const closeButton = document.querySelector('.close-btn');

    signUpLink.addEventListener('click', function(e) {
        e.preventDefault();
        formContainer.classList.add('active');
    });

    closeButton.addEventListener('click', function() {
        formContainer.classList.remove('active');
    });
});
