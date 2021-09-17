import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: "" }
    this.getWeather = this.getWeather.bind(this)
    this.setCity = this.setCity.bind(this)
  }

  getWeather(e) {
    e.preventDefault();
    const apiKey = "c2149af5e092d46e89658501726efad9"
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${apiKey}`
    ).then( response => {
      response.json().then( result => {
        console.log(result)
      })
    }
    )
  }

  setCity(e) {
    const city = e.target.value
    this.setState({ city })
  }

  render() {
    return (
      <div>
        <h1>Weather Forecast</h1>
        <form onSubmit={this.getWeather}>
          <input
            type="text"
            placeholder="Please enter city"
            onChange={this.setCity}
          />
          <button
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Weather;
