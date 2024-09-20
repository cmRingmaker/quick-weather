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

formSubmit.addEventListener('click', (e) => {
	if (formInput.value === '') {
		e.preventDefault()
	} else {
		e.preventDefault()
		console.log(formInput.value)
		weather.getWeather(`${formInput.value.toLowerCase()}`)
	}
})

/* ==================================================================
    - - - - - - - - - - [ %FUNCTIONS ]
   ==================================================================
    * description
   ================================================================== */

function name(params) {}
