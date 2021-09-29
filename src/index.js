/* eslint no-unused-vars: 0 no-undef: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// component file
import TodoContainer from './functionBased/components/TodoContainer.js';
import './functionBased/App.css';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
