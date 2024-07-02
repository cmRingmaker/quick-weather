const themeToggle = document.getElementById('theme-toggle')
const savedTheme = localStorage.getItem('theme')

// Save state of checkbox based on current theme chosen
if (savedTheme) {
	themeToggle.checked = savedTheme === 'dark'
}

// Checkbox state, update storage when clicked
themeToggle.addEventListener('change', () => {
	localStorage.setItem('theme', themeToggle.checked ? 'dark' : 'light')
})
