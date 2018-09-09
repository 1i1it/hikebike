import React from 'react'
import 'whatwg-fetch'
import PropTypes from 'prop-types'

export default class AddHike extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  static propTypes = {
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = (event) => {
    // alert('A name was submitted: ' + this.state.value);

    this.handleAddHike(this.state.value)
    event.preventDefault()
  }

  handleAddHike = (hikeDetails) => {
    fetch('/api/hike', {
      method: 'POST',
      body: JSON.stringify({ description: hikeDetails }),
      headers: {
        'Content-Type': 'application/json'
      }

    })
      .then(res => res.json())
      .then(json => {
        console.log('json', json)
      })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Description:
          <input type='text' value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}
