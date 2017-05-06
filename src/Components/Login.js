import React, { Component } from 'react'
import firebase from 'firebase'

const provider = new firebase.auth.GoogleAuthProvider();

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      user: null,
    }
  }

  componentWillMount() {
    if(this.props.user) { this.props.history.push('/')} 
  }

  loginWithGoogle = () => {
    firebase.auth().signInWithPopup(provider)
  }

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  onChangePassword = (e) => {
    this.setState({ password: e.target.value })
  }

  onClickLogin = (e) => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then()
      .catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        Email:
        <input type="text" onChange={this.onChangeEmail} value={this.state.email} />
        <br/>
        Password:
        <input type="text" onChange={this.onChangePassword} value={this.state.password} />
        <br/>
        <button onClick={this.onClickLogin} >Login</button>
        <button onClick={this.loginWithGoogle}>Google</button>
        <button onClick={e => this.props.history.push('/Registration')} >Registration</button>
      </div>
    )
  }
}