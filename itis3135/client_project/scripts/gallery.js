function openModal(imageElement) {
    const modal = document.getElementById('photo-modal');
    const modalImage = document.getElementById('modal-image');
    const modalText = document.getElementById('modal-text');

    // Set the image source
    modalImage.src = imageElement.src;

    // Set the text from the data attribute
    modalText.textContent = imageElement.getAttribute('data-text');

    // Show the modal
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('photo-modal');
    const modalImage = document.getElementById('modal-image');
    const modalText = document.getElementById('modal-text');

    // Clear the image source and text
    modalImage.src = '';
    modalText.textContent = '';

    // Hide the modal
    modal.style.display = 'none';
}
