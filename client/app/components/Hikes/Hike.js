import React, { Component } from 'react'

export default class Hike extends Component {
  render () {
    return <div>
      <div>
      name: {this.props.name}
      </div>
      <div>
      description: {this.props.description}
      </div>
      <div>
      admin: {this.props.admin}
      </div>
    </div>
  }
}
