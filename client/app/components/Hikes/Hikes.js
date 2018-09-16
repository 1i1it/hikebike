import React, { Component } from 'react'
import Hike from './Hike'
import 'whatwg-fetch'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

export default class Hikes extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hikes: []
    }
  }

  componentDidMount () {
    this.getAllHikes()
  }

  getAllHikes = () => {
    fetch('/api/hikes')
      .then(res => res.json())
      .then(hikes => {
        this.setState({
          hikes
        })
      })
      .catch((err) => {
        console.error('Failed to fetch: ', err)
        return {}
      })
  }

  getHikesBySearchTerm = (searchTerm) => {
    fetch(`/api/hikes/${searchTerm}`)
      .then(res => res.json())
      .then(hikes => {
        this.setState({
          hikes
        })
      })
      .catch((err) => {
        console.error('Failed to fetch: ', err)
        return {}
      })
  }

  onSearchInputChange = (event) => {
    const searchString = event.target.value
    if (searchString && searchString.length > 2) {
      this.getHikesBySearchTerm(searchString)
    } else {
      this.getAllHikes()
    }
  }

  handleDeleteHike = (id) => {
    fetch(`/api/hike/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(hikes => {
        this.setState({
          hikes
        })
      })
  }

  render () {
    return (
      <div>
        {this.state.hikes ? (
          <div>
            <TextField style={{ padding: 24 }}
              id='searchInput'
              placeholder='Search for Hikes'
              margin='normal'
              onChange={this.onSearchInputChange} />
            <Grid container spacing={24} style={{ padding: 24 }}>
              { this.state.hikes.map((currentHike, index) => (
                <Grid key={index} item xs={12} sm={6} lg={2} xl={2}>
                  <Hike hike={currentHike} handleDelete={this.handleDeleteHike} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : 'No hikes found' }
      </div>
    )
  }
}
