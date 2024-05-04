document.body.classList.remove('dark');
const themeSelect = document.getElementById('theme-select');
themeSelect.addEventListener('change', changeTheme);
function changeTheme() {
    
    const selectedTheme = themeSelect.value;
    
    
    if (selectedTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
  function changeTheme() {
    // Check selected option
    const selectedTheme = themeSelect.value;
    
    // Check if dark theme is selected
    if (selectedTheme === 'dark') {
      // Add dark class to body
      document.body.classList.add('dark');
      // Change logo image src to white logo
      logoImg.src = 'byui-logo_blue.webp'; // Update with your actual file name
    } else {
      // Remove dark class from body
      document.body.classList.remove('dark');
      // Change logo image src to blue logo
      logoImg.src = 'byui-logo_blue.webp'; // Update with your actual file name
    }
  }
  const logoImg = document.getElementById('byui-logo_blue.webp');

  
