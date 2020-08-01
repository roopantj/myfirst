import React from 'react';
import Person from './Person';
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
           className={this.state.stylesheet}
           onClick={this.togglePersonHandler}>Toggle Name</button>
         {persons}
       </div>
     );
   }
}



export default App;