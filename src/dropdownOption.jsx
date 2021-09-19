import React from 'react';

class DropdownOption extends React.Component {
  constructor(props) {
    super(props);
    this.submitValue = this.submitValue.bind(this);
  }

  submitValue(e) {
    e.preventDefault();
    document.querySelector(".chosen-value").value = e.target.innerText
    this.props.submitForm(e)
  }

  render() {
    return (
      <li onClick={this.submitValue}>
        {this.props.cityName}
      </li>
    );
  }
}

export default DropdownOption;
