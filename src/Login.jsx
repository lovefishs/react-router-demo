import React, { Component } from 'react'

import setPageTitle from './setPageTitle'

@setPageTitle
class Login extends Component {
  componentDidMount = () => {
    console.log('Login componentDidMount props', this.props)
  }
  componentWillUnmount = () => {
    console.log('Login componentWillUnmount')
  }

  render = () => {
    return (
      <div>Login Page</div>
    )
  }
}

export default Login
