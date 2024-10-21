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
		console.log(weatherData)
		// TODO fix this console log
		console.log('Weather data received:', weatherData)
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

function updateUI(data) {
	if (data.error) {
		todayCard.textContent = data.message
	} else {
		todayCard.innerHTML = `
      <h1>${data.location.city}, ${abbrState(data.location.region)}</h1>
      <h2>${data.location.country}</h2>
      <span class='time'>${formatDate(data.location.time)}</span>
      <h3>${data.current.temp} °F</h3>

      <div class='current'>
        <img class='c1' src='${data.current.icon}' alt='${data.current.text}'>
        <span class='c2'>${data.current.text}</span>
      </div>

      <div class='forecast'>
        <span class='f1'>Lowest: ${data.current.forecast.mintemp} °F</span>
        <span class='noclick'>|</span>
        <span class='f2'>Highest: ${data.current.forecast.maxtemp} °F</span>
      </div>
    `
	}
}

function abbrState(stateName) {
	const stateList = {
		Arizona: 'AZ',
		Alabama: 'AL',
		Alaska: 'AK',
		Arkansas: 'AR',
		California: 'CA',
		Colorado: 'CO',
		Connecticut: 'CT',
		Delaware: 'DE',
		Florida: 'FL',
		Georgia: 'GA',
		Hawaii: 'HI',
		Idaho: 'ID',
		Illinois: 'IL',
		Indiana: 'IN',
		Iowa: 'IA',
		Kansas: 'KS',
		Kentucky: 'KY',
		Louisiana: 'LA',
		Maine: 'ME',
		Maryland: 'MD',
		Massachusetts: 'MA',
		Michigan: 'MI',
		Minnesota: 'MN',
		Mississippi: 'MS',
		Missouri: 'MO',
		Montana: 'MT',
		Nebraska: 'NE',
		Nevada: 'NV',
		'New Hampshire': 'NH',
		'New Jersey': 'NJ',
		'New Mexico': 'NM',
		'New York': 'NY',
		'North Carolina': 'NC',
		'North Dakota': 'ND',
		Ohio: 'OH',
		Oklahoma: 'OK',
		Oregon: 'OR',
		Pennsylvania: 'PA',
		'Rhode Island': 'RI',
		'South Carolina': 'SC',
		'South Dakota': 'SD',
		Tennessee: 'TN',
		Texas: 'TX',
		Utah: 'UT',
		Vermont: 'VT',
		Virginia: 'VA',
		Washington: 'WA',
		'West Virginia': 'WV',
		Wisconsin: 'WI',
		Wyoming: 'WY',
	}

	return stateList[stateName] || stateName
}

function formatDate(dateString) {
	const [dateStr, timeStr] = dateString.split(' ')
	const [year, month, day] = dateStr.split('-')

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]

	const getSuffix = (day) => {
		if (day >= 11 && day <= 13) return 'th' // Exception for 11-13
		const lastDigit = day % 10
		// 0th - 9th
		return ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][
			lastDigit
		]
	}

	const formatted = `${months[(month, 10) - 1]} ${day}${getSuffix(
		day
	)}, ${year}`

	return `${formatted} ${timeStr}`
}
