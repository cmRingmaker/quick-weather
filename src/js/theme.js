const themeToggle = document.getElementById('theme-toggle')
const savedTheme = localStorage.getItem('theme')

// Save state of checkbox based on current theme chosen
if (savedTheme) {
	setTheme(savedTheme)
} else {
	// Set the state of checkbox to be neither true or false for first page load
	themeToggle.indeterminate = true
}

themeToggle.addEventListener('change', () => {
	setTheme(themeToggle.checked ? 'dark' : 'light')
})

function setTheme(theme) {
	themeToggle.checked = theme === 'dark'
	localStorage.setItem('theme', theme)
}

// Only runs on users first page load!
// This was the only way I could solve a bug that forced system darkmode users to click the checkbox twice.
// The intention is for the users VERY FIRST load, set the theme and checkbox accordingly.
if (!savedTheme) {
	// Get the preceived lightness of an RGB value
	const getLightness = (color) => {
		const [r, g, b] = color.match(/\d+/g).map((n) => n / 255)
		// Using WCAG 2 formula to get Relative luminance of how bright the current background is on users first page load
		return 0.2126 * r + 0.7152 * g + 0.0722 * b
	}

	// Get the background color of the body and set
	const bgColor = window.getComputedStyle(document.body).backgroundColor
	const isDark = getLightness(bgColor) < 0.5
	setTheme(isDark ? 'dark' : 'light')
}
