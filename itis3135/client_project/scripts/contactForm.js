document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission
    const form = event.target;
    const formData = new FormData(form);
    const messageElement = document.getElementById('form-message');

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            messageElement.textContent = 'Thank you! Your message has been sent.';
            messageElement.style.color = '#6ac6f0';
            form.reset(); // Clear the form fields after submission
        } else {
            messageElement.textContent = 'Oops! Something went wrong. Please try again.';
            messageElement.style.color = '#ff6b6b';
        }
    } catch (error) {
        messageElement.textContent = 'Network error. Please check your connection.';
        messageElement.style.color = '#ff6b6b';
    }
});
