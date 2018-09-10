import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Link } from 'react-router-dom'

import {
  Paper,
  Typography,
  TextField,
  Button
} from '@material-ui/core'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
})

const Header = () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='title' color='inherit'>

            <span style={{ padding: '20px' }}>
              <Button
                color='yellow'
                variant='contained'
              >
                <Link to='/hikes'>
                My hikes
                </Link>
              </Button>
            </span>

            <span style={{ padding: '20px' }}>
              <Button
                type='submit'
                color=''
                variant='contained'
              >
                <Link to='/addhike'>
                Add hike
                </Link>
              </Button>
            </span>

          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default Header
