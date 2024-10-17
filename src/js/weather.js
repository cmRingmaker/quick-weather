export class Weather {
	// Since this is a free key and a small personal project hosted on github
	// I don't care that I can't actually hide it lol (never do this)
	// Carry on, bots and nosey hackers
	static weatherKey = '6736d10c44a04f25826202900241206'

	async getWeather(location) {
		try {
			const response = await fetch(
				`https://api.weatherapi.com/v1/forecast.json?key=${Weather.weatherKey}&q=${location}&days=7`,
				{ mode: 'cors' }
			)

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}

			const data = await response.json()

			if (data.error) {
				throw new Error(data.error.message || 'Unknown API error')
			}

			return this.processData(data)
		} catch (error) {
			console.error(`An error occurred while fetching weather data: ${error}`)
			throw error
		}
	}

	processData(data) {
		return {
			location: {
				city: data.location.name,
				region: data.location.region,
				country: data.location.country,
				time: data.location.localtime,

				// Coordinates
				lat: data.location.lat,
				lon: data.location.long,
			},

			current: {
				temp: data.current.temp_f,
				feelslike_f: data.current.feelslike_f,

				// Icon & Text
				icon: data.current.condition.icon,
				text: data.current.condition.text,

				forecast: {
					mintemp: data.forecast.forecastDay[0].day.mintemp_f,
					maxtemp: data.forecast.forecastDay[0].day.maxtemp_f,
					condition: data.forecast.forecastDay[0].day.condition.text,
				},
			},

			// Tomorrow
			oneday: {
				avgtemp: data.forecast.forecastday[1].day.avgtemp_f,
				icon: data.forecast.forecastday[1].day.condition.icon,
				text: data.forecast.forecastday[1].day.condition.text,
			},

			// Two days from now
			twodays: {
				avgtemp: data.forecast.forecastday[1].day.avgtemp_f,
				icon: data.forecast.forecastday[1].day.condition.icon,
				text: data.forecast.forecastday[1].day.condition.text,
			},
		}
	}

	static fahrenheitToCelsius(f) {
		return ((f - 32) * 5) / 9
	}

	static celsiusToFahrenheit(c) {
		return (c * 9) / 5 + 32
	}
}
