import 'babel-core/polyfill';

import './styles/index.scss';
import React from 'react';
import App from './components/app';

React.render(
  <App />,
  document.getElementById('root')
);
