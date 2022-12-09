
import React from 'react'
import styled  from 'styled-components'

const Text= styled.div`
 

   .border {
    box-sizing: border-box;

position: absolute;
width: 193px;
height: 60px;
left: 77px;
top: 40px;

border: 1px solid #FFFFFF;
   }

 .header-text {
    display:flex;
    max-width:80%;
 }
  
  .header-text h5 {

    width: 80%;
    margin:auto;
    display:flex;
   margin-top:20px;
    
  }

  @media only screen and (max-width: 600px) {
    .header-text h5 {
  display: flex;
  justify-content: center !important;
    
  }
}

`;
function TextNav(props) {
  return (
    <Text>
   
    <div className='header-text'>
    <div className='border'>
    <h5>{props.title}</h5>
    </div>
    </div>
   
    </Text>
  )
}

export default TextNav