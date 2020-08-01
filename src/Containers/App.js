import React from 'react';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/cockpit/Cockpit';
import './App.css';
import './Button.css';


class App extends React.Component {
  state = {
    persons: [
   { id:'001', name:'XXX' , age: 25 },
   { id:'002', name:'YYY' , age: 26 },
   { id:'003', name:'ZZZ' , age: 27 }
   ],
    otherState: 'some other state',
    showPersons:false,
    stylesheet:'Button'
  }
  
  
  deletePersonHandler = (index) =>{
     const persons = [...this.state.persons]
     persons.splice(index,1)
     this.setState({persons: persons})
  }
  
  
  changeNameHandler = (event,id) => {
     const personIndex = this.state.persons.findIndex(element=>{ 
       return element.id===id })
     const persons = [...this.state.persons]
     const changePerson = persons[personIndex]
     changePerson.name=event.target.value
     persons[personIndex]=changePerson
     this.setState({persons: persons})
  }  
  
  
  togglePersonHandler = () => {
    const getState = this.state.showPersons;
    this.setState({showPersons: !getState})
    if(!getState)
     this.setState({stylesheet:'Button1'})
    else
    this.setState({stylesheet:'Button'})
  }
  
  
  render(){
    let persons=null;
    if(this.state.showPersons){
      persons=(
      <Persons 
      persons={this.state.persons} 
      clicked={this.deletePersonHandler}
      changed={this.changeNameHandler}/>
      )
   }
   
    return(
      <div>
       <Cockpit 
       persons={this.state.persons}
       stylesheet={this.state.stylesheet}
       toggle={this.togglePersonHandler}/> 
       {persons}
      </div>
    );
  }
}



export default App;