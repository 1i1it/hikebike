import React from 'react'
import 'whatwg-fetch'
import PropTypes from 'prop-types'

import {
  Paper,
  Typography,
  TextField,
  Button
} from '@material-ui/core'

export default class AddHike extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newHike: {
        description: '',
        name: '',
        admin: '' }
    }
  }

  static propTypes = {
  }

  handleInput = (e) => {
    let value = e.target.value
    let name = e.target.name
    this.setState(prevState => {
      return {
        newHike: {
          ...prevState.newHike, [name]: value
        }
      }
    }, () => console.log(this.state.newHike)
    )
  }

  handleSubmit = (event) => {
    alert('A newHike was submitted: ' + this.state.newHike)
    this.handleAddHike(this.state.newHike)
    event.preventDefault()
  }

  handleAddHike = (newHike) => {
    fetch('/api/hike', {
      method: 'POST',
      body: JSON.stringify({ newHike }),
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
    const { description, name, admin } = this.state.newHike
    return (

      <Paper>
        <form onSubmit={this.handleSubmit}>
          <TextField
            name='description'
            label='Description'
            value={description}
            onChange={this.handleInput}
            margin='normal'
          />

          <TextField
            name='name'
            label='Name'
            value={name}
            onChange={this.handleInput}
            margin='normal'
          />

          <TextField
            name='admin'
            label='Admin'
            value={admin}
            onChange={this.handleInput}
            margin='normal'
          />

          <Button
            type='submit'
            color='primary'
            variant='raised'
          >
          Add hike
          </Button>
        </form>
      </Paper>

    )
  }
}
