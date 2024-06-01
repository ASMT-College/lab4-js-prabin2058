document.getElementById('emailForm').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
        errorMessage.style.display = 'block';
        event.preventDefault();
    } else {
        errorMessage.style.display = 'none';
    }
});
