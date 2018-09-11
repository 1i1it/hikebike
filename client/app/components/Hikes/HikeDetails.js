import React, { Component } from 'react'

export default class HikeDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hike: {}
    }
  }

  componentDidMount () {
    const { id } = this.props.match.params
    this.getHike(id)
  }

  getHike = (id) => {
    fetch(`/api/hike/${id}`)
      .then(res => res.json())
      .then(hike => {
        this.setState({
          hike
        })
      })
      .catch((err) => {
        console.error('Failed to fetch: ', err)
        return {}
      })
  }

  render () {
    return (
      <div className={"hike-details"}>
        {this.state.hike.description}
        {this.state.hike.name}
      </div>
    )
  }
}
