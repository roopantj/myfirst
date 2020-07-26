import React from 'react';
import Person from './Person';
import './App.css';
import person from './Person';
class App extends React.Component {
  state = {
    persons: [
   { id:'001', name:'XXX' , age: 25 },
   { id:'002', name:'YYY' , age: 26 },
   { id:'003', name:'ZZZ' , age: 27 }
 ],
 otherState: 'some other state',
 showPersons:false
 }
  deletePersonHandler = (index) =>{
     const persons = [...this.state.persons]
     persons.splice(index,1)
     this.setState({persons: persons})
  }
  changeNameHandler = (event,id) => {
     /*this.setState({
       persons: [
         { name: 'XXX' , age: 30},
         {  name: event.target.value , age: 28},
         {  name: 'ZZZ' , age: 27}
       
      ]
     }
     )*/
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
  }
render(){
  const style = {
    backgroundColor: 'green',
    color:'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    pointer: 'cursor'
  }
    let persons=null;
    if(this.state.showPersons){
      persons=(
      <div>
       {
       this.state.persons.map((person,index)=>{
       return <Person 
       click={()=>this.deletePersonHandler(index)}
       name={person.name} 
       age={person.age}
       key={person.id}
       changed={(event)=> this.changeNameHandler(event,person.id) } />
       })
       }
      </div>
      )
      style.backgroundColor='red'; 
    }
    let style1=[]
    if(this.state.persons.length<=2)
     style1.push('red')
    if(this.state.persons.length<=1)
     style1.push('bold')
  return(
    <div className="App">
      <h1>Hi, I am React App</h1>
      <p className={style1.join(' ')}>This is really working!</p>
      <button 
      style={style}
      onClick={this.togglePersonHandler}>Toggle Name</button>
      {persons}
    </div>
    );
}
}
export default App;