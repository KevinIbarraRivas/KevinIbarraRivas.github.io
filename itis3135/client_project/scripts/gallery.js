document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('photo-modal');
    const modalImage = document.getElementById('modal-image');
    const modalText = document.getElementById('modal-text');
    const closeModal = document.getElementById('close-modal');

    // Select all gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Function to open modal
    function openModal(event) {
        const imgElement = event.currentTarget;
        const src = imgElement.src;
        const text = imgElement.getAttribute('data-text');

        // Set modal content
        modalImage.src = src;
        modalText.textContent = text;

        // Show modal
        modal.style.display = 'block';
    }

    // Attach event listeners to each gallery item
    galleryItems.forEach((item) => {
        item.addEventListener('click', openModal);
    });

    // Function to close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        modalImage.src = ''; // Clear src to avoid empty attribute error
    });

    // Close modal when clicking outside of the content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalImage.src = ''; // Clear src to avoid empty attribute error
        }
    });
});
