import React from 'react';
import './cockpit.css';

const cockpit = (props) => {
    let style1=[]
    if(props.persons.length<=2)
      style1.push('red')
    if(props.persons.length<=1)
      style1.push('bold')
    return(
        <div className="App">
         <h1>Hi, I am React App</h1>
         <p className={style1.join(' ')}>This is really working!</p>
         <button 
           className={props.stylesheet}
           onClick={props.toggle}>Toggle Name</button>
        </div>
    );
}

export default cockpit;