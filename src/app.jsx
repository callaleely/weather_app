import React from 'react';
import ReactDOM from 'react-dom';

import Weather from './weather';

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<Weather />, document.getElementById('main'));
});
