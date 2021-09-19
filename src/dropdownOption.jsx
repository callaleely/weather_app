import React from 'react';

class DropdownOption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        {this.props.cityName}
      </li>
    );
  }
}

export default DropdownOption;
