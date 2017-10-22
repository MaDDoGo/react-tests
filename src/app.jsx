import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import '../index.html';

import Index from './components/index';

ReactDOM.render(
  <Index phrase="ES6" />,
  document.getElementById('root'),
);
