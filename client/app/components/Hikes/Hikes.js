import React, { Component } from 'react'
import Hike from './Hike'
import 'whatwg-fetch'

export default class Hikes extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hikes: []
    }
  }

  componentDidMount () {
    fetch('/api/hikes')
      .then(res => res.json())
      .then(json => {
        this.setState({
          hikes: json
        })
      })
      .catch((err) => {
        console.error('Failed to fetxh: ', err)
        return {}
      })
  }

  render () {
    const hikes = this.state.hikes.map((hike, index) => {
      return (
        <li key={index}>
          <Hike name={hike.name}
            description={hike.description}
            admin={hike.admin} />
        </li>)
    })

    return (
      <div className='all-hikes-wrapper'>
        <ul className='all-hikes-list'>
          {hikes}
        </ul>
      </div>
    )
  }
}
