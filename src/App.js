import React from "react"
import UserInput from "./components/UserInput"
import UserOutput from "./components/UserOutput"
import Validation from "./components/Validation"
import Char from "./components/Char"
import './App.css'
import { Component } from "react"

class App extends Component {
 constructor() {
   super()
   this.state ={
      username: "Tola",
      showPerson: false,
      person: [
        {id:1, name:"Zen", age: 25},
        {id:2, name: "Yen", age: 38},
        {id:3, name: "Lee", age: 33}
      ],
      userInput: ""
   }
 }



switchNameHandler = (newname) => {
  this.setState({
     username: newname,   
  })
}

nameChangeHandler = (event, id) => {
  const personIndex = this.state.person.findIndex(p =>{
    return p.id === id
  })

  const person = {
    ...this.state.person[personIndex]
  }
  person.name = event.target.value
  const persons = [...this.state.person]
  persons[personIndex] = person

  this.setState({
    person: persons
  })
}

inputChangeHandler = (event) => {

 this.setState({
  userInput: event.target.value
 })
  
} 

toggleShowHandler =() => {
 const doesShow = this.state.showPerson
 const defaultName = "Tola"
 this.setState({showPerson: !doesShow, username: defaultName})
}

deletePersonHandler =(personIndex) => {
  //const persons = this.state.person.slice() --> first option as good as the one below
  const persons = [...this.state.person]
  persons.splice(personIndex, 1)
  this.setState({person: persons})
}

deleteCharHandler = (index) => {
  const text = this.state.userInput.split("")
  text.splice(index, 1)
  const updatedText = text.join("")
  this.setState({userInput: updatedText})
}

render() {  

  const charList = this.state.userInput.split("").map((chr, index) => {
    return <Char char={chr} key={index} clicked={() => this.deleteCharHandler(index)}/>
  })


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
        return <div className="persons" 
                    key={person.id} 
                    changed={(event) => this.nameChangeHandler(event, person.id)} 
                    onClick={()=>this.deletePersonHandler(index)}>
                    {`${person.name} ${person.age}`}
              </div>
      })}
      <hr/>
      <input type="text" onChange={this.inputChangeHandler} value={this.state.userInput} />
      <p>{this.state.userInput}</p>
      <Validation inputLength={this.state.userInput.length}/>
      {charList}
    </div>
  );
  }
}

export default App;
