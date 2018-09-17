import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

const config = require('../../../../config/config')
import './fblogin.less'

class LoginTab extends Component {
  constructor () {
    super()
    this.state = { isAuthenticated: false, user: null, token: '' }
  }

  logout = () => {
    this.setState({ isAuthenticated: false, token: '', user: null })
  };

  facebookResponse = (response) => {
    const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
    const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
    };
    fetch('/login/api/auth/facebook', options).then(r => {
      const token = r.headers.get('x-auth-token')
      r.json().then(user => {
        if (token) {
          this.setState({isAuthenticated: true, user, token})
        }
      });
    })
  };

  onFailure = (error) => {
    alert(error)
  }
  render () {
    console.log("{this.state.user.", this.state.user)
    let content = this.state.isAuthenticated
      ? (
        <div>
          <p>Wellcome back, {this.state.user.fullName}</p>
          <div>
            {this.state.user.email}
          </div>
          <div>
            <button onClick={this.logout} className='button'>
              Log out
            </button>
          </div>
        </div>
      )
      : (
        <div>
          <FacebookLogin
            //cssClass="my-facebook-button-class"
            style={{borderRadius: "12px"}}
            icon="fa-facebook"
            appId={config.facebookAuth.clientID}
            autoLoad={false}
            fields='name,email,picture'
            callback={this.facebookResponse}
            size="small"

          />
        </div>
      )

    return (
      <div className='App'>
        {content}
      </div>
    )
  }
}

export default LoginTab
