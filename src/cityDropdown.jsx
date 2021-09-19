import React from 'react';
import DropdownOption from './dropdownOption';

class CityDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { options: [] }
    this.cityData = require('../city.list.json');
    this.cityNames = this.cityData.map(city => [city.name, city.state, city.country].filter(e=>e).join(", ")).sort();
    this.allowFilter = this.allowFilter.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.filterDropdown = this.filterDropdown.bind(this);
  }

  allowFilter(e) {
    const dropdown = document.querySelector(".value-list")
    e.target.placeholder = "Please type at least 3 letters"
    dropdown.classList.add("open")
    // dropdownArray.forEach(dropdown => {
    //   dropdown.classList.remove("closed");
    // })
  }

  closeDropdown(e) {
    const dropdown = document.querySelector(".value-list")
    e.target.placeholder = "Select..";
    dropdown.classList.remove("open")
  }

  filterDropdown(e) {
    const dropdown = document.querySelector(".value-list")
    let options = []
    dropdown.classList.add("open");
    let inputValue = e.target.value
    if(inputValue.length > 0) {
      for(let i = 0; i < this.cityNames.length; i++) {
        if((inputValue.substring(0, inputValue.length) == this.cityNames[i].substring(0, inputValue.length).toLowerCase())) {
          options.push(this.cityNames[i])
        }
      }
    }
    this.setState({options: options})
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="chosen-value"
          placeholder="Select.."
          onFocus={this.allowFilter}
          onBlur={this.closeDropdown}
          onInput={this.filterDropdown}
        />
        <ul className="value-list">
          { 
            this.state.options.map(city => (
              <DropdownOption cityName={city} />
            ))
          }
        </ul>
      </div>
    )
  }
}

export default CityDropdown;
