import React from "react"
import UserInput from "./components/UserInput"
import UserOutput from "./components/UserOutput"
import './App.css'
import { Component } from "react"

class App extends Component {
 constructor() {
   super()
   this.state ={
      username: "Tola"
   }
 }

switchNameHandler = (newname) => {
  this.setState({
     username: newname
     
  })
}

nameChangeHandler = (event) => {
  this.setState({
    username: event.target.value
  })
}

render() {  
  return (
    <div className="App">
      <UserInput changed={this.nameChangeHandler} value={this.state.username}/>
      <button onClick={() => this.switchNameHandler("Lolek")}>Change name</button>
      <UserOutput username={this.state.username}>That's it</UserOutput>
      <UserOutput username="Max">Whatever and ever</UserOutput>
    </div>
  );
  }
}

export default App;
