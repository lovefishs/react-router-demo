import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import AsyncLoadModule from './AsyncLoadModule'

class TopicsRoutes extends Component {
  componentDidMount = () => {
    console.log('Topics componentDidMount props', this.props)
  }
  componentWillUnmount = () => {
    console.log('Topics componentWillUnmount')
  }

  WrapTopic = (props) => (
    <AsyncLoadModule moduleId="route.topic" load={() => import(/* webpackChunkName: 'route.topic' */ './Topic')}>
      {(Comp) => <Comp {...props} />}
    </AsyncLoadModule>
  )

  render = () => {
    const { match } = this.props

    return (
      <div>
        <Route path={`${match.url}/:topicId`} component={this.WrapTopic} />
        <Route exact path={match.url} render={() => (
          <h3>Please select a topic.</h3>
        )}/>
      </div>
    )
  }
}

export default TopicsRoutes
