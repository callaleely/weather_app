import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './weather';
import WeatherCard from './weatherCard';
import WeatherForm from './weatherForm';
import CityDropdown from './cityDropdown';
import DropdownOption from './dropdownOption';

it("Weather renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Weather />, div)
})
it("Weather Form renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WeatherForm />, div)
})
it("Weather Card renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WeatherCard />, div)
})
it("City Dropdown select renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CityDropdown />, div)
})
it("Dropdown options render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DropdownOption />, div)
})
