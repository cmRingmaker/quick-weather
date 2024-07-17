export async function getWeather(location) {
	// Can't hide keys on github lol, lmao even
	const response = await fetch(
		`https://api.weatherapi.com/v1/forecast.json?key=6736d10c44a04f25826202900241206&q=${location}`,
		{ mode: 'cors' }
	)
	const data = await response.json()
	// console.log(data)
	const weatherData = processData(data)
	console.log(weatherData)

	// return processData(data)
}

function processData(data) {
	const weatherData = {
		icon: data.current.condition.icon,
		current: data.current.condition.text,
		temp: data.current.temp_f,
		feelsLike: data.current.feelslike_f,
		maxtemp: data.forecast.forecastday[0].day.maxtemp_f,
		mintemp: data.forecast.forecastday[0].day.mintemp_f,
	}

	return weatherData
}

function fahrenheitToCelsius(f) {
	return ((f - 32) * 5) / 9
}

function celsiusToFahrenheit(c) {
	return (c * 9) / 5 + 32
}
