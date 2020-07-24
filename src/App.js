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
 otherState: 'some other state'
 }
   switchNameHandler = () => {
   this.setState({
    persons: [
      { name:'XXX' , age: 25 },
      { name:'AAA' , age: 26 },
      { name:'ZZZ' , age: 27 }
    ] 
   })
   console.log(this.state);
  }
  
render(){
  return(
    <div className="App">
      <h1>Hi, I am React App</h1>
      <p>This is really working!</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
      <Person 
        name = {this.state.persons[1].name}
        age  = {this.state.persons[1].age} >My hobby is listening music</Person>
      <Person 
        name = {this.state.persons[2].name}
        age  = {this.state.persons[2].age} />
    </div>
    );
}
}
export default App;