import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import setPageTitle from './setPageTitle'
import TopicsRoutes from './TopicsRoutes'

@setPageTitle
class Topics extends Component {
  componentDidMount = () => {
    console.log('Topics componentDidMount props', this.props)
  }
  componentWillUnmount = () => {
    console.log('Topics componentWillUnmount')
  }

  render = () => {
    const { match } = this.props

    return (
      <div>
        <h2>Topics Page</h2>

        <ul>
          <li>
            <Link to={`${match.url}/rendering`}>
              Rendering with React
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>
              Components
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>

        <TopicsRoutes {...this.props} />
      </div>
    )
  }
}

export default Topics
