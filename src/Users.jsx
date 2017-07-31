import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import setPageTitle from './setPageTitle'
import UsersRoutes from './UsersRoutes'

@setPageTitle
class Users extends Component {
  componentDidMount = () => {
    console.log('Users componentDidMount props', this.props)
  }
  componentWillUnmount = () => {
    console.log('Users componentWillUnmount')
  }

  loadUser = () => import(/* webpackChunkName: 'route.user' */ './User')
  LazyUser = (props) => (
    <Bundle load={this.loadUser}>
      {(Comp) => <Comp {...props} />}
    </Bundle>
  )

  render = () => {
    const { match } = this.props

    return (
      <div>
        <h3>Users Page</h3>

        <ul>
          <li>
            <Link to={`${match.url}/huang`}>
              Mr.Huang
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/zhang`}>
              Mr.Zhange
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/yuan`}>
              Mr.Yuan
            </Link>
          </li>
        </ul>

        <UsersRoutes {...this.props} />
      </div>
    )
  }
}

export default Users
