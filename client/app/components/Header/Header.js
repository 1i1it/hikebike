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

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
})

const Header = (props) => {

  const AllHikesLink = props => <Link to={`/hikes`} {...props}/>
  const AddHikeLink = props => <Link to={`/addhike`} {...props}/>

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='title' color='inherit'>

            <span style={{ padding: '20px' }}>
              <Button component={AllHikesLink}
                color='secondary'
                variant='raised'>
                My hikes
              </Button>
            </span>

            <span style={{ padding: '20px' }}>
              <Button component={AddHikeLink}
                color='secondary'
                variant='raised'>
                Add hike
              </Button>
            </span>

          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default Header
