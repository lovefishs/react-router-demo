import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import AppRoutes from './AppRoutes'

class App extends Component {
  componentDidMount = () => {
    console.log('App component props:', this.props)
  }
  componentWillUnmount = () => {
    console.log('App componentWillUnmount')
  }

  render = () => {
    return (
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <AppRoutes {...this.props} />
      </div>
    )
  }
}

export default App
