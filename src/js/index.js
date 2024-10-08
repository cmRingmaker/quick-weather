// -------------------------
// IMPORT
import '../css/style.css'
import '../css/reset.css'
import { Weather } from './weather.js'
import THEME from './theme.js'

const weather = new Weather()

// -------------------------
// DOM ELEMENTS
const formSubmit = document.getElementById('form-submit')
const formInput = document.getElementById('form-input')
const todayCard = document.getElementById('hero')

// -------------------------
// EVENT LISTENERS

formSubmit.addEventListener('click', async (e) => {
	e.preventDefault()
	if (formInput.value === '') return

	try {
		console.log(`Fetching weather for: ${formInput.value}`)
		const weatherData = await weather.getWeather(
			`${formInput.value.toLowerCase()}`
		)
		// TODO fix this console log
		console.log(`Weather data received: ${weatherData}`)
		updateUI(weatherData)
	} catch (error) {
		console.error(`Error fetching weather: ${error}`)
	}
})

/* ==================================================================
    - - - - - - - - - - [ %FUNCTIONS ]
   ==================================================================
    * description
   ================================================================== */

function updateUI(weatherData) {
	if (weatherData.error) {
		todayCard.textContent = weatherData.message
	} else {
		todayCard.innerHTML = `
      <h2>${weatherData.location.name}, ${weatherData.location.country}</h2>
      <p>Current: ${weatherData.current} ${weatherData.temp}°F</p>
      <p>Feels like: ${weatherData.feelsLike}°F</p>
      <img src="${weatherData.icon}" alt="${weatherData.current}">
    `
	}
}
