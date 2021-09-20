import React from 'react';
import CityDropdown from './cityDropdown';

class WeatherForm extends React.Component {
  constructor(props) {
    super(props);
    this.getWeather = this.getWeather.bind(this)
    this.passWeatherInfo = this.passWeatherInfo.bind(this)
  }

  getWeather(e) {
    e.preventDefault();
    const apiKey = "c2149af5e092d46e89658501726efad9"
    const city = document.querySelector(".chosen-value").value.split(",")[0]
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
    ).then(response => {
      if(response.status === 200) {
        response.json().then(result => {
          this.passWeatherInfo(result)
        })
      } else {
        alert("Please enter valid city name")
        this.props.displayWeather()
      }
    }
    )
  }

  passWeatherInfo(res) {
    const city = res.name + ", " + res.sys.country
    const temp = res.main.temp
    const humid = res.main.humidity
    const wind = res.wind.speed
    const icon = res.weather[0].icon

    this.props.displayWeather(city, temp, humid, wind, icon)
  }

  render() {
    return (
      <form className="weather-form-container" onSubmit={this.getWeather}>
        <CityDropdown submitForm={this.getWeather} />
        <button
          type="submit"
        >
          Submit
          </button>
      </form>
    )
  }
}
export default WeatherForm;
