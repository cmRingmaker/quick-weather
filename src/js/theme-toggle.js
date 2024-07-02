const root = document.documentElement
let colorScheme = localStorage.getItem('preferred-color-scheme')
const colorSchemeToggle = document.getElementById('theme-toggle')
let labelForToggle = document.querySelector('label[for=theme-toggle]')
let sun = document.querySelector('.sun')
let moon = document.querySelector('.moon')

// Load system theme if first load
if (colorScheme === null) {
	localStorage.setItem('preferred-color-scheme', 'light-dark')
}

// Initial page load
setColorScheme(colorScheme)

colorSchemeToggle.addEventListener('change', () => {
	colorScheme = colorSchemeToggle.checked ? 'light' : 'dark'
	localStorage.setItem('preferred-color-scheme', colorScheme)
	setColorScheme(colorScheme)
	// changeSVG()
})

function setColorScheme(scheme) {
	// Set the Scheme on Root
	root.style.setProperty('color-scheme', scheme)
	// Set checkbox state
	colorSchemeToggle.checked = scheme === 'light'
	changeSVG()
}

function changeSVG() {
	if (colorSchemeToggle.checked) {
		// moon svg
		sun.style.display = 'none'
		moon.style.display = 'flex'
	} else {
		// sun svg
		sun.style.display = 'flex'
		moon.style.display = 'none'
	}
}
