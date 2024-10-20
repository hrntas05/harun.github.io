const themeBtn = document.getElementById('theme-btn');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    themeBtn.textContent = '☀️';
  }
}

themeBtn.addEventListener('click', () => {
  const theme = document.documentElement.getAttribute('data-theme');
  
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
});

