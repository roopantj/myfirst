import React from 'react';
import Person from './Person';
import './App.css'
class App extends React.Component {
  state = {
    persons: [
   { name:'XXX' , age: 25 },
   { name:'YYY' , age: 26 },
   { name:'ZZZ' , age: 27 }
 ],
 otherState: 'some other state',
 showPersons:false
 }
   switchNameHandler = () => {
   this.setState({
    persons: [
      { name:'XXX' , age: 25 },
      { name:'AAA' , age: 26 },
      { name:'ZZZ' , age: 27 }
    ] 
   })
  }
   changeNameHandler = (event) => {
     this.setState({
       persons: [
         { name: 'XXX' , age: 30},
         { name: event.target.value , age: 28},
         { name: 'ZZZ' , age: 27}
       
      ]
     }
     )
    }  
  togglePersonHandler = () => {
    const getState = this.state.showPersons;
    this.setState({showPersons: !getState})
  }
render(){
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    pointer: 'cursor'
  }
  return(
    <div className="App">
      <h1>Hi, I am React App</h1>
      <p>This is really working!</p>
      <button 
      style={style}
      onClick={this.togglePersonHandler}>Toggle Name</button>
      { this.state.showPersons === true ?
      <div>
      <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
      <Person 
        name = {this.state.persons[1].name}
        age  = {this.state.persons[1].age} 
        click = {this.switchNameHandler}
        changed={this.changeNameHandler}>My hobby is listening music</Person>
      <Person 
        name = {this.state.persons[2].name}
        age  = {this.state.persons[2].age} /> 
      </div> : null 
      }
    </div>
    );
}
}
export default App;