import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'

import App from './App'

const render = (Component) => {
  ReactDOM.render(
    <Router>
      <Route path="/" component={Component} />
    </Router>,
    document.querySelector('#root')
  )
}

render(App)
