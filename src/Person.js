import React from 'react';
import styled from 'styled-components';
const StyleDiv =styled.div`
 width : 60%;
 margin : 16px auto;
 border : 1px solid #eee;
 box-shadow: 0 1px 2px #ccc;
 padding: 16px;
 text-align: center;
 
 @media (min-width:500px) {
    width:450px
  }
  
`;
const person = props => {
   return(
      <StyleDiv>
          <p onClick={props.click}>I am {props.name} and I am {props.age}</p>
          <p>{props.children}</p>
         
            <input  type="text" onChange={props.changed} placeholder="Type Here" />
          
            </StyleDiv>
    );
}
export default person;