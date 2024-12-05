function resetForm() {
    const form = document.getElementById('intro-form');
    form.reset();

    // Remove additional courses except the first one
    const coursesContainer = document.getElementById('courses-container');
    const extraCourses = coursesContainer.querySelectorAll('input:not(:first-of-type)');
    extraCourses.forEach((input) => input.remove());

    document.getElementById('result').classList.add('hidden');
    form.style.display = 'block';
}

function addCourseField(event) {
    event.preventDefault();

    const coursesContainer = document.getElementById('courses-container');
    const existingCourses = coursesContainer.querySelectorAll('input[name="course[]"]').length;
    const courseNumber = existingCourses + 1;

    const newCourseField = document.createElement("input");
    newCourseField.type = "text";
    newCourseField.name = "course[]";
    newCourseField.placeholder = `Course ${courseNumber}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";
    deleteButton.addEventListener('click', (e) => {
        e.preventDefault();
        coursesContainer.removeChild(newCourseField);
        coursesContainer.removeChild(deleteButton);
    });

    coursesContainer.appendChild(newCourseField);
    coursesContainer.appendChild(deleteButton);
}

function submitFormData() {
    const form = document.getElementById('intro-form');
    document.getElementById('result-name').innerText = form.name.value;
    document.getElementById('result-mascot').innerText = form.mascot.value;

    const imageFile = form.image.files[0];
    if (imageFile) {
        document.getElementById('result-image').src = URL.createObjectURL(imageFile);
    }

    document.getElementById('result-image-caption').innerText = form['image-caption'].value;
    document.getElementById('result-personal-background').innerText = form['personal-background'].value;
    document.getElementById('result-professional-background').innerText = form['professional-background'].value;
    document.getElementById('result-academic-background').innerText = form['academic-background'].value;
    document.getElementById('result-web-development').innerText = form['web-development'].value;
    document.getElementById('result-platform').innerText = form.platform.value;

    const courses = form.querySelectorAll('input[name="course[]"]');
    const coursesText = Array.from(courses).map((course) => course.value).join(', ');
    document.getElementById('result-courses').innerText = coursesText;

    document.getElementById('result-funny-thing').innerText = form['funny-thing'].value;
    document.getElementById('result-other-info').innerText = form['other-info'].value;

    // Hide the form and show the result
    form.style.display = 'none';
    document.getElementById('result').classList.remove('hidden');
}

function validateForm(event) {
    const form = document.getElementById('intro-form');
    const name = form.name.value.trim();
    const mascot = form.mascot.value.trim();
    const imageCount = form.image.files.length;
    const caption = form['image-caption'].value.trim();

    if (!name || !mascot || !imageCount || !caption) {
        alert("Please fill in all required fields (Name, Mascot, Image, Image Caption).");
        event.preventDefault();
        return false;
    }

    event.preventDefault();
    submitFormData();
}

document.addEventListener("DOMContentLoaded", (event) => {
    const form = document.getElementById("intro-form");
    form.addEventListener("submit", validateForm);

    document.getElementById("add-course-button").addEventListener("click", addCourseField);

    document.getElementById("reset-button").addEventListener("click", (event) => {
        event.preventDefault();
        resetForm();
    });

    document.getElementById("reset-results-link").addEventListener("click", (event) => {
        event.preventDefault();
        resetForm();
    });
});
