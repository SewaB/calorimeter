import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'
import App from './App'
import './index.css'

  var config = {
    apiKey: "AIzaSyBPxQIxfUPrtLwu4wDpXMN2u0RUMsKH7Mg",
    authDomain: "calorimeter-36e5a.firebaseapp.com",
    databaseURL: "https://calorimeter-36e5a.firebaseio.com",
    projectId: "calorimeter-36e5a",
    storageBucket: "calorimeter-36e5a.appspot.com",
    messagingSenderId: "540505210201"
  };
  firebase.initializeApp(config);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);