/**
 * Handles modal functionality for a photo gallery.
 * Listens for clicks on gallery items to display them in a modal with additional text information.
 * Allows closing the modal by clicking a close button or outside the modal content.
 *
 * @file photoModal.js
 */

document.addEventListener('DOMContentLoaded', () => {
    /**
     * Modal element to display enlarged images and corresponding text.
     * @type {HTMLElement}
     */
    const modal = document.getElementById('photo-modal');

    /**
     * Image element inside the modal to display the enlarged photo.
     * @type {HTMLImageElement}
     */
    const modalImage = document.getElementById('modal-image');

    /**
     * Text element inside the modal to display accompanying text for the photo.
     * @type {HTMLElement}
     */
    const modalText = document.getElementById('modal-text');

    /**
     * Close button element to hide the modal.
     * @type {HTMLElement}
     */
    const closeModal = document.getElementById('close-modal');

    /**
     * Collection of gallery items to attach click events for modal functionality.
     * @type {NodeListOf<Element>}
     */
    const galleryItems = document.querySelectorAll('.gallery-item');

    /**
     * Opens the modal with the image and text of the clicked gallery item.
     *
     * @param {MouseEvent} event - The click event triggered by a gallery item.
     */
    function openModal(event) {
        const imgElement = event.currentTarget;

        /**
         * Source URL of the clicked image.
         * @type {string}
         */
        const src = imgElement.src;

        /**
         * Additional text information stored in the "data-text" attribute of the clicked image.
         * @type {string}
         */
        const text = imgElement.getAttribute('data-text');

        // Set modal content
        modalImage.src = src;
        modalText.textContent = text;

        // Show modal
        modal.style.display = 'block';
    }

    // Attach event listeners to each gallery item
    galleryItems.forEach((item) => {
        /**
         * Adds a click event listener to each gallery item to open the modal.
         */
        item.addEventListener('click', openModal);
    });

    /**
     * Closes the modal and clears its content.
     */
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        modalImage.src = ''; // Clear src to avoid empty attribute error
    });

    /**
     * Closes the modal when clicking outside of the modal content.
     *
     * @param {MouseEvent} event - The click event triggered anywhere on the window.
     */
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalImage.src = ''; // Clear src to avoid empty attribute error
        }
    });
});
