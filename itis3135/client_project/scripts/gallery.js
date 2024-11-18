function openModal(photoId) {
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = `images/${photoId}.jpg`;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('photoModal').style.display = 'none';
}
