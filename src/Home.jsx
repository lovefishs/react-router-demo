import React, { Component } from 'react'

import setPageTitle from './setPageTitle'

@setPageTitle
class Home extends Component {
  componentDidMount = () => {
    console.log('Home componentDidMount props', this.props)
  }
  componentWillUnmount = () => {
    console.log('Home componentWillUnmount')
  }

  render = () => {
    return (
      <div>Home Page</div>
    )
  }
}

export default Home
