import React, { Component } from 'react'

class User extends Component {
  componentDidMount = () => {
    console.log('User componentDidMount props', this.props)
  }
  componentWillReceiveProps = (nextProps) => {
    if (this.props.match.params.userName !== nextProps.match.params.userName) {
      console.log('params userName is change: %s -> %s', this.props.match.params.userName, nextProps.match.params.userName)
    }
  }
  componentWillUnmount = () => {
    console.log('User componentWillUnmount')
  }

  render = () => {
    const { match } = this.props

    return (
      <div>
        <h3>{match.params.userName}</h3>
      </div>
    )
  }
}

export default User
