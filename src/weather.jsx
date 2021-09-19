import React from 'react';
import WeatherForm from './weatherForm'
import WeatherCard from './weatherCard'

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.displayWeather = this.displayWeather.bind(this)
    this.state = {
      city: "",
      temp: "",
      humid: "",
      wind: "",
      weatherCode: ""
    }
  }

  displayWeather(city, temp, humid, wind, weatherCode) {
    this.setState({
      city: city,
      temp: temp,
      humid: humid,
      wind: wind,
      weatherCode: weatherCode
    })
  }

  render() {
    return (
      <div>
        <h1>Weather Forecast</h1>
        <WeatherForm displayWeather={this.displayWeather} />
        <WeatherCard 
          city={this.state.city}
          temp={this.state.temp}
          humid={this.state.humid}
          wind={this.state.wind}
          weatherCode={this.state.weatherCode}
        />
      </div>
    );
  }
}

export default Weather;
