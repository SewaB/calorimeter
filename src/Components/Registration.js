import React, { Component } from 'react'
import firebase from 'firebase'

export default class Registration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  componentWillMount() {
    if(this.props.user) { this.props.history.push('/')} 
  }

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  onChangePassword = (e) => {
    this.setState({ password: e.target.value })
  }

  onClickSave = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then()
    .catch(function(error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode === 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    })
  }

  render() {
    return (
      <div>
        Login:
        <input type="text" value={this.state.email} onChange={this.onChangeEmail} />
        <br />

        Password:
        <input type="text" value={this.state.password} onChange={this.onChangePassword} />
        <br />
        
        <button onClick={this.onClickSave} >Save</button>
      </div>
    )
  }
}