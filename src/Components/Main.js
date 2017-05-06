import React, { Component } from 'react'

export default class Main extends Component {

  componentWillMount() {
    if(!this.props.user) { this.props.history.push('/Login')} 
  }

  render() {
    return (
      <div>
        Main page
      </div>
    )
  }
}