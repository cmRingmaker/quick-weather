// -------------------------
// IMPORT
import '../css/style.css'
import '../css/reset.css'
import { getWeather } from './weather.js'
import THEME from './theme.js'

// -------------------------
// DOM ELEMENTS
const weatherBtn = document.getElementById('get-weather')

// -------------------------
// EVENT LISTENERS

weatherBtn.addEventListener('click', () => {
	getWeather('Detroit')
})

/* ==================================================================
    - - - - - - - - - - [ %FUNCTIONS ]
   ==================================================================
    * description
   ================================================================== */

function name(params) {}
