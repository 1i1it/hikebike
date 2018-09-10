import React from 'react'
import { render } from 'react-dom'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App'
import NotFound from './components/App/NotFound'

import Home from './components/Home/Home'

import HelloWorld from './components/HelloWorld/HelloWorld'
import Hikes from './components/Hikes/Hikes'
import AddHike from './components/AddHike/Addhike'

import './styles/styles.scss'
import { orange } from '@material-ui/core/colors'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    secondary: {
      light: orange[200],
      main: '#ff8a65',
      contrastText: 'rgb(0,0,0)'
    },
    primary: {
      main: '#80cbc4',
      contrastText: 'rgb(0,0,0)'
    }
  }
})

render((
  <MuiThemeProvider theme={theme}>
    <Router>
      <App>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/helloworld' component={HelloWorld} />
          <Route path='/hikes' component={Hikes} />
          <Route path='/addhike' component={AddHike} />
          <Route component={NotFound} />
        </Switch>
      </App>
    </Router>
  </MuiThemeProvider>
), document.getElementById('app'))
