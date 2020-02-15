import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      speed: 10
    };
  }

  componentDidMount(){
    let data;
    const db = firebase.firestore();
    const speedRef = db.collection("users").doc("hello");
    speedRef.get().then(function(doc){
      data = doc.data().speed;
    }).catch(function(error){
      console.log("Something went wrong while getting speed");
    });
    this.setState({
      speed: data
    })
  }

render(){
  return (
    <div className ="App">
      <h1>{this.state.speed}</h1>
    </div>
  );
}
}

export default App;
