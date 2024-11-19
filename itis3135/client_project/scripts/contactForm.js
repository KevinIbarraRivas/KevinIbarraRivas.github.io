/**
 * Handles the submission of a contact form.
 * Prevents the default form submission behavior and sends the form data using an asynchronous HTTP POST request.
 * Displays feedback messages to the user based on the outcome of the submission.
 *
 * @file contactFormHandler.js
 */

document.getElementById('contactForm').addEventListener('submit', async function(event) {
    /**
     * Prevent the default form submission and handle it manually.
     *
     * @param {Event} event - The form submission event.
     */
    event.preventDefault();

    /**
     * The form element being submitted.
     * @type {HTMLFormElement}
     */
    const form = event.target;

    /**
     * Form data to be sent with the request.
     * @type {FormData}
     */
    const formData = new FormData(form);

    /**
     * Element to display feedback messages to the user.
     * @type {HTMLElement}
     */
    const messageElement = document.getElementById('form-message');

    try {
        /**
         * Sends the form data to the server using a POST request.
         *
         * @type {Response}
         */
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            // If the submission is successful
            messageElement.textContent = 'Thank you! Your message has been sent.';
            messageElement.style.color = '#6ac6f0';

            // Reset the form fields
            form.reset();
        } else {
            // If the server returns an error
            messageElement.textContent = 'Oops! Something went wrong. Please try again.';
            messageElement.style.color = '#ff6b6b';
        }
    } catch (error) {
        // If a network error occurs
        messageElement.textContent = 'Network error. Please check your connection.';
        messageElement.style.color = '#ff6b6b';
    }
});
