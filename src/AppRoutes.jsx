import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import AsyncLoadModule from './AsyncLoadModule'
import Home from './Home'

class AppRoutes extends Component {
  componentDidMount = () => {
    console.log('AppRoutes component props:', this.props)

    // const { history, location } = this.props
    // let nextPath = '/home'

    // if (location.pathname !== nextPath) {
    //   history.push(nextPath)
    // }
  }
  componentWillUnmount = () => {
    console.log('AppRoutes componentWillUnmount')
  }

  WrapHome = (props) => (
    <Home {...props} title="Page Title: Home" />
  )
  WrapLogin = (props) => (
    <AsyncLoadModule moduleId="route.login" load={() => import(/* webpackChunkName: 'route.login' */ './Login')}>
      {(Comp) => <Comp {...props} title="Page Title: Login" />}
    </AsyncLoadModule>
  )
  WrapUsers = (props) => (
    <AsyncLoadModule moduleId="route.users" load={() => import(/* webpackChunkName: 'route.users' */ './Users')}>
      {(Comp) => <Comp {...props} title="Page Title: Users" />}
    </AsyncLoadModule>
  )
  WrapTopics = (props) => (
    <AsyncLoadModule moduleId="route.topics" load={() => import(/* webpackChunkName: 'route.topics' */ './Topics')}>
      {(Comp) => <Comp {...props} title="Page Title: Topics" />}
    </AsyncLoadModule>
  )

  render = () => {
    return (
      <div>
        <Route exact component={this.WrapHome} path="/home" />
        <Route exact component={this.WrapLogin} path="/login" />
        <Route component={this.WrapUsers} path="/users" />
        <Route component={this.WrapTopics} path="/topics" />
      </div>
    )
  }
}

export default AppRoutes
