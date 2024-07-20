// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Modal Pop-up
const modal = document.getElementById('modalPopup');
const modalBtn = document.getElementById('modalBtn');
const closeBtn = document.getElementsByClassName('close')[0];

modalBtn?.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn?.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Form Validation
const form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Validate form inputs
  const name = document.getElementById('name').value;
  if (!name) {
    alert('Name is required');
  } else {
    // Submit form
    alert('Form submitted successfully');
  }
});
