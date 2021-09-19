import React from 'react';

class CityDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { options: [] }
    this.cityData = require('../city.list.json');
    this.cityNames = this.cityData.map(city => [city.name, city.state, city.country].filter(e=>e).join(", ")).sort();
    this.allowFilter = this.allowFilter.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.filterDropdown = this.filterDropdown.bind(this);
    this.submitValue = this.submitValue.bind(this);
  }

  allowFilter(e) {
    const dropdown = document.querySelector(".value-list")
    e.target.placeholder = "Please type at least 3 letters"
    dropdown.classList.add("open")
    // dropdownArray.forEach(dropdown => {
    //   dropdown.classList.remove("closed");
    // })
  }

  submitValue(e) {
    e.preventDefault();
    document.querySelector(".chosen-value").value = e.target.innerText
    this.props.submitForm(e)
    this.closeDropdown(e)
  }

  closeDropdown(e) {
    const dropdown = document.querySelector(".value-list")
    const inputEle = document.querySelector(".chosen-value")
    inputEle.placeholder = "Select..";
    dropdown.classList.remove("open")
    this.setState({options: []})
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

    // document.querySelector("body").addEventListener("click", this.closeDropdown)
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="chosen-value"
          placeholder="Select.."
          onFocus={this.allowFilter}
          onInput={this.filterDropdown}
        />
        <ul className="value-list">
          { 
            this.state.options.map((city, index) => (
              <li onClick={this.submitValue}>
                {city}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default CityDropdown;
