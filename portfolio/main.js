
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


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


const form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  if (!name) {
    alert('Name is required');
  } else {

    alert('Form submitted successfully');
  }
});
