let themeToggleButton = document.querySelector('#theme-toggle');
let themeSpan = document.querySelector('span');

// Check local storage for saved theme
if (localStorage.getItem('theme')) {
  if (localStorage.getItem('theme') === 'dark') {
    enableDarkMode();
  }
}

// Add event listener to toggle button
themeToggleButton.addEventListener('click', () => {
  if (document.body.classList.contains('dark-theme')) {
    document.body.classList.remove('dark-theme');
    themeSpan.textContent = 'Dark Theme';
    localStorage.setItem('theme', 'light');
  } else {
    enableDarkMode();
  }
});

function enableDarkMode() {
  document.body.classList.add('dark-theme');
  themeSpan.textContent = 'Light Theme';
  localStorage.setItem('theme', 'dark');
}
