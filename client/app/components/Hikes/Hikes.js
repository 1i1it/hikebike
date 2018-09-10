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
    fetch('/api/hikes')
      .then(res => res.json())
      .then(json => {
        this.setState({
          hikes: json
        })
      })
      .catch((err) => {
        console.error('Failed to fetch: ', err)
        return {}
      })
  }

  // getCourses = () => {
  //   client.getEntries({
  //     content_type: 'course',
  //     query: this.state.searchString
  //   })
  //     .then((response) => {
  //       this.setState({courses: response.items})
  //     })
  //     .catch((error) => {
  //       console.log("Error occured while fetching data")
  //       console.log(error)
  //     })
  // }
  //
  //
  onSearchInputChange = (event) => {
    console.log('search', event.target.value)
    // if (event.target.value) {
    //   this.setState({searchString: event.target.value})
    // } else {
    //   this.setState({searchString: ''})
    // }
    // this.getCourses()
  }

  handleDeleteHike = (id) => {
    console.log("_id ", id)
    fetch(`/api/hike/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(json => {
        console.log('json', json)
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
                <Grid key={index} item xs={12} sm={6} lg={3} xl={3}>
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
