// -------------------------
// IMPORT
import '../css/style.css'
import '../css/reset.css'
import { Weather } from './weather.js'
import THEME from './theme.js'

const weather = new Weather()

// -------------------------
// DOM ELEMENTS
const weatherBtn = document.getElementById('get-weather')

// -------------------------
// EVENT LISTENERS

weatherBtn.addEventListener('click', () => {
	weather.getWeather('Detroit')
})

/* ==================================================================
    - - - - - - - - - - [ %FUNCTIONS ]
   ==================================================================
    * description
   ================================================================== */

function name(params) {}
