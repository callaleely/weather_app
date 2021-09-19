import React from 'react';
import WeatherForm from './weatherForm'
import WeatherCard from './weatherCard'

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Weather Forecast</h1>
        <WeatherForm />
        <WeatherCard />
      </div>
    );
  }
}

export default Weather;
