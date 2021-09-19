import React from 'react';
import CityDropdown from './cityDropdown';

class WeatherForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: "" }
    this.getWeather = this.getWeather.bind(this)
  }

  getWeather(e) {
    e.preventDefault();
    const apiKey = "c2149af5e092d46e89658501726efad9"
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${apiKey}`
    ).then(response => {
      response.json().then(result => {
        console.log(result)
      })
    }
    )
  }

  render() {
    return (
      <form onSubmit={this.getWeather}>
        <CityDropdown />
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
