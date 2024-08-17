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
const todayCard = document.getElementById('hero')

// -------------------------
// EVENT LISTENERS

formSubmit.addEventListener('click', (e) => {
	e.preventDefault()
	weather.getWeather('Detroit')
})

/* ==================================================================
    - - - - - - - - - - [ %FUNCTIONS ]
   ==================================================================
    * description
   ================================================================== */

function name(params) {}
