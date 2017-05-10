// src/components/BasicList.js

// 导入 react 核心库.
import React, { Component } from 'react';
// 导入路由核心库.
import { Link, Route } from 'react-router-dom';

class Index extends Component {
  render() {
    return (
      <h1 className="my-title">Hello World!</h1>
    )
  }
}

export default () => (
  <div>
    <h2>Basic List</h2>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topics">Topics</Link></li>
    </ul>
    <hr/>
    <Route path="/" component={Index} exact />
    <Route path="/about" render={() => <h1>About</h1>} />
    <Route path="/topics" render={() => <h1>Topics</h1>} />
  </div>
);
