import React from 'react';

class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const codeURL = `http://openweathermap.org/img/wn/${this.props.weatherCode}@2x.png`
    const className = this.props.city ? "weather-card-container" : "weather-card-container closed"
    return (
      <div className={className}>
        <h1>{this.props.city}</h1>
        <img className="weather-code" src={codeURL}></img>
        <h1>{this.props.temp}&#8457;</h1>
        <h3>Humidity: {this.props.humid}%</h3>
        <h3>Wind Speed: {this.props.wind}m/h</h3>
      </div>
    )
  }
}
export default WeatherCard;
