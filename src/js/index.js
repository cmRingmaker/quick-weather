// -------------------------
// IMPORT
import '../css/style.css'
import '../css/reset.css'
import WEATHER, { getForecast } from './weather.js'
import THEME from './theme.js'

// -------------------------
// DOM ELEMENTS
const getWeather = document.getElementById('get-weather')

// -------------------------
// EVENT LISTENERS

getWeather.addEventListener('click', () => {
	getForecast('Detroit')
})

/* ==================================================================
    - - - - - - - - - - [ %FUNCTIONS ]
   ==================================================================
    * description
   ================================================================== */

function name(params) {}
