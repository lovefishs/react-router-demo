import React, { Component } from 'react'

class Topic extends Component {
  componentDidMount = () => {
    console.log('Topic componentDidMount props', this.props)
  }
  componentWillReceiveProps = (nextProps) => {
    if (this.props.match.params.topicId !== nextProps.match.params.topicId) {
      console.log('params topicId is change: %s -> %s', this.props.match.params.topicId, nextProps.match.params.topicId)
    }
  }
  componentWillUnmount = () => {
    console.log('Topic componentWillUnmount')
  }

  render = () => {
    const { match } = this.props

    return (
      <div>
        <h3>{match.params.topicId}</h3>
      </div>
    )
  }
}

export default Topic
