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
      //It doesn't ever reach the setState it seems like, I know that it's getting the data because window.alert() works and 
      //it shows the data
      this.setState({
      speed: data
    })
    }).catch(function(error){
      console.log("Something went wrong while getting speed");
    });
    
    
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
