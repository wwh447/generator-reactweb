// src/components/BasicList.js

// 导入 react 核心库.
import React from 'react';
// 导入路由核心库.
import { Link, Route } from 'react-router-dom';

import Index from './Index';
import About from './About';
import Topics from './Topics';
//import Counter from './Counter';

export default () => (
  <div>
    <h2>Basic List</h2>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topics">Topics</Link></li>
      {/*
      <li><Link to="/counter" replace>Counter</Link></li>
      */}
    </ul>
    <hr/>
    <Route path="/" component={Index} exact />
    <Route path="/about" component={About} />
    <Route path="/topics" component={Topics} />
    {/*
    <Route path="/counter" component={Counter} />
    */}
  </div>
);
