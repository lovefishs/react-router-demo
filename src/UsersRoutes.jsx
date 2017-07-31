import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import AsyncLoadModule from './AsyncLoadModule'

class UsersRoutes extends Component {
  componentDidMount = () => {
    console.log('UsersRoutes componentDidMount props', this.props)
  }
  componentWillUnmount = () => {
    console.log('UsersRoutes componentWillUnmount')
  }

  WrapUser = (props) => (
    <AsyncLoadModule moduleId="route.user" load={() => import(/* webpackChunkName: 'route.user' */ './User')}>
      {(Comp) => <Comp {...props} />}
    </AsyncLoadModule>
  )

  render = () => {
    const { match } = this.props

    return (
      <div>
        <Route path={`${match.url}/:userName`} component={this.WrapUser} />
        <Route exact path={match.url} render={() => (
          <h3>Please select a user.</h3>
        )}/>
      </div>
    )
  }
}

export default UsersRoutes
