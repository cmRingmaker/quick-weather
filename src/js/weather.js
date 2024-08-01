export class Weather {
	// Since this is a free key and a small personal project hosted on github
	// I don't care that I can't actually hide it lol (never do this)
	static weatherKey = '6736d10c44a04f25826202900241206'

	async getWeather(location) {
		const response = await fetch(
			`https://api.weatherapi.com/v1/forecast.json?key=${Weather.weatherKey}&q=${location}&days=7`,
			{ mode: 'cors' }
		)
		const data = await response.json()
		console.log(this.processData(data))
		return this.processData(data)
	}

	processData(data) {
		return {
			icon: data.current.condition.icon,
			current: data.current.condition.text,
			temp: data.current.temp_f,
			feelsLike: data.current.feelslike_f,
			maxtemp: data.forecast.forecastday[0].day.maxtemp_f,
			mintemp: data.forecast.forecastday[0].day.mintemp_f,
			forecast: data.forecast.forecastday,
			lastUpdated: data.current.last_updated,
		}
	}

	static fahrenheitToCelsius(f) {
		return ((f - 32) * 5) / 9
	}

	static celsiusToFahrenheit(c) {
		return (c * 9) / 5 + 32
	}
}
