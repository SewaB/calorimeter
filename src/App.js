import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Login from './Components/Login'
import Registration from './Components/Registration'
import Main from './Components/Main'
import firebase from 'firebase'

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      user: null
    }
  }
  
  onClickLogout = () => {
    firebase.auth().signOut()
    this.setState({ user: null })
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }))
  }

  render() {
    return (
      <Router>
        <div>
          <Route
            exact path='/'
            component={(props) => (
              <Main user={ this.state.user } { ...props } />
            )}
          />

          <Route
            path='/Registration'
            component={(props) => (
              <Registration user={ this.state.user } { ...props } />
            )}
          />

          <Route
            path='/Login'
            component={(props) => (
              <Login user={ this.state.user } { ...props } />
            )}
          />

          <button onClick={this.onClickLogout} >Logout</button>
        </div>
      </Router>
    );
  }
}

