import React from "react"
import UserInput from "./components/UserInput"
import UserOutput from "./components/UserOutput"
import './App.css'
import { Component } from "react"

class App extends Component {
 constructor() {
   super()
   this.state ={
      username: "Tola",
      showPerson: false,
      person: [
        {name:"Zen", age: 25},
        {name: "Yen", age: 38},
        {name: "Lee", age: 33}
      ]
   }
 }

switchNameHandler = (newname) => {
  this.setState({
     username: newname,   
  })
}

nameChangeHandler = (event) => {
  this.setState({
    username: event.target.value
  })
}

toggleShowHandler =() => {
 const doesShow = this.state.showPerson
 const defaultName = "Tola"
 this.setState({showPerson: !doesShow, username: defaultName})
}

deletePersonHandler =(personIndex) => {
  const persons = this.state.person
  persons.splice(personIndex, 1)
  this.setState({person: persons})
}

render() {  
  return (
    <div className="App">
      <button onClick={this.toggleShowHandler}>Toggle text</button>
      <UserInput changed={this.nameChangeHandler} value={this.state.username}/>
      <button onClick={() => this.switchNameHandler("Lolek")}>Change name</button>
      {this.state.showPerson ?
        <div>
          <UserOutput username={this.state.username}>That's it</UserOutput>
          <UserOutput username="Max">Whatever and ever</UserOutput>
        </div> : null
      }
      {this.state.person.map((person, index) => {
        return <div click={()=>this.deletePersonHandler(index)}>{`${person.name} ${person.age}`}</div>
      })}
    </div>
  );
  }
}

export default App;
