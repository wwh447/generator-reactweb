// src/index.js

// 导入 react 核心库.
import React from 'react';
// 导入 react DOM 库.
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Link, Route,
} from 'react-router-dom';

import './css/global.scss';

import createMemoryHistory from 'history/createMemoryHistory';

const customHistory = createMemoryHistory(location);

/* --- 基础路由 --- */

import App from './components/BasicListExample';

/* --- */

ReactDOM.render(
  <Router history={customHistory}>
    <App />
  </Router>,
  document.getElementById('root')
);
