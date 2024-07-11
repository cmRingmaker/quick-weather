export async function getForecast(location) {
	// Can't hide keys on github lol, lmao even
	const response = await fetch(
		`https://api.weatherapi.com/v1/forecast.json?key=6736d10c44a04f25826202900241206&q=${location}`,
		{ mode: 'cors' }
	)
	const data = await response.json()
	console.log(data)

	return data
}

// getForecast('Detroit')
